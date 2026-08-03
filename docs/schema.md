# Database Schema — Phase 2

Neon PostgreSQL schema for HICKS Salon. Defined in `sql/001_schema.sql`,
seeded in `sql/002_seed.sql`.

## Tables

### `locations`
One row per salon branch.

| Column | Type | Notes |
|---|---|---|
| id | SERIAL PK | |
| name | VARCHAR(150) | UNIQUE |
| address | TEXT | |
| phone | VARCHAR(30) | nullable |
| opening_hours | JSONB | per-day hours, e.g. `{"mon_thu": "11:00-22:00", ...}` |
| is_active | BOOLEAN | default true |
| created_at / updated_at | TIMESTAMPTZ | auto-maintained |

### `services`
One row per bookable service or package.

| Column | Type | Notes |
|---|---|---|
| id | SERIAL PK | |
| category | VARCHAR(50) | e.g. "Hair Designing", "Package" |
| name | VARCHAR(100) | UNIQUE with category |
| description | TEXT | |
| price_cents | INTEGER | money stored as integer cents |
| duration_minutes | INTEGER | nullable, not yet in frontend |
| is_active | BOOLEAN | default true |
| created_at / updated_at | TIMESTAMPTZ | auto-maintained |

### `bookings`
One row per appointment. **Structure only** — see scope note below.

| Column | Type | Notes |
|---|---|---|
| id | BIGSERIAL PK | |
| customer_name | VARCHAR(150) | required |
| customer_phone | VARCHAR(30) | required |
| customer_email | VARCHAR(150) | nullable — reserved for confirmation email, not yet collected by booking.html |
| service_id | INTEGER FK -> services.id | |
| location_id | INTEGER FK -> locations.id | |
| booking_date | DATE | |
| booking_time | TIME | |
| status | VARCHAR(20) | pending / confirmed / completed / cancelled |
| notes | TEXT | nullable |
| created_at / updated_at | TIMESTAMPTZ | auto-maintained |

**Constraint:** `UNIQUE (location_id, booking_date, booking_time)` — a baseline
data-integrity guard against two bookings at the exact same slot in the
same branch. This is **not** the full availability/conflict logic
(buffers between appointments, per-service duration overlap, past-date
rejection, etc.) — that business logic is explicitly Phase 3 scope.

### `contact_messages`
One row per contact-form submission.

| Column | Type | Notes |
|---|---|---|
| id | BIGSERIAL PK | |
| name | VARCHAR(150) | required |
| email | VARCHAR(150) | required |
| phone | VARCHAR(30) | nullable |
| message | TEXT | required |
| status | VARCHAR(20) | new / read / archived |
| created_at / updated_at | TIMESTAMPTZ | auto-maintained |

## Relationships

```
locations (1) ───< (many) bookings
services  (1) ───< (many) bookings
```

`contact_messages` stands alone (no foreign keys).

## Deferred to later phases

- `admins` table — deferred to Phase 4 (Admin Authentication); no login
  functionality exists yet, so no table was added for it in this pass.
- Any indexes/constraints tied to booking business rules (e.g. minimum
  lead time, per-staff capacity) — Phase 3.

## Seed data

`sql/002_seed.sql` inserts the two real branches from `locations.html`
and the nine individual services + one package from `service.html`,
so the data layer matches what's already shown on the site. Seeding is
idempotent via `ON CONFLICT DO NOTHING`, backed by the `UNIQUE`
constraints on `locations.name` and `services(category, name)`.

## Applying the schema

```bash
npm install
cp .env.example .env   # fill in DATABASE_URL
npm run db:migrate
```

This runs every file in `/sql` in filename order (`001_`, `002_`, ...)
against the database in `DATABASE_URL`.
