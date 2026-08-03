-- =========================================================================
-- 001_schema.sql
-- Phase 2 — Database Design
--
-- Defines the core tables for the HICKS Salon data layer:
--   locations, services, bookings, contact_messages
--
-- Scope note: this file defines STRUCTURE only (tables, constraints,
-- indexes). No booking business rules (availability windows, conflict
-- resolution beyond a basic uniqueness guard, etc.) are implemented here
-- — those belong to Phase 3 (Booking System).
-- =========================================================================

-- -------------------------------------------------------------------------
-- Reusable trigger: keep updated_at current on every UPDATE.
-- -------------------------------------------------------------------------
CREATE OR REPLACE FUNCTION set_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- -------------------------------------------------------------------------
-- locations
-- One row per salon branch (see locations.html: Kausar Colony, Branch 2).
-- -------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS locations (
  id              SERIAL PRIMARY KEY,
  name            VARCHAR(150) NOT NULL UNIQUE,
  address         TEXT,
  phone           VARCHAR(30),
  -- Flexible per-day hours, e.g.:
  -- {"mon_thu": "11:00-22:00", "fri": "11:00-23:00", "sat": "11:00-23:00", "sun": "11:00-21:00"}
  opening_hours   JSONB,
  is_active       BOOLEAN NOT NULL DEFAULT true,
  created_at      TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at      TIMESTAMPTZ NOT NULL DEFAULT now()
);

DROP TRIGGER IF EXISTS trg_locations_updated_at ON locations;
CREATE TRIGGER trg_locations_updated_at
  BEFORE UPDATE ON locations
  FOR EACH ROW EXECUTE FUNCTION set_updated_at();

-- -------------------------------------------------------------------------
-- services
-- One row per bookable service (see service.html grid: Hair Designing,
-- Hair Wash, Beard Styling, plus "The Hicks Signature" package).
-- Prices are stored in cents (integer) to avoid floating-point rounding.
-- -------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS services (
  id                SERIAL PRIMARY KEY,
  category          VARCHAR(50) NOT NULL,
  name              VARCHAR(100) NOT NULL,
  description       TEXT,
  price_cents       INTEGER NOT NULL CHECK (price_cents >= 0),
  duration_minutes  INTEGER CHECK (duration_minutes IS NULL OR duration_minutes > 0),
  is_active         BOOLEAN NOT NULL DEFAULT true,
  created_at        TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at        TIMESTAMPTZ NOT NULL DEFAULT now(),

  CONSTRAINT uq_services_category_name UNIQUE (category, name)
);

DROP TRIGGER IF EXISTS trg_services_updated_at ON services;
CREATE TRIGGER trg_services_updated_at
  BEFORE UPDATE ON services
  FOR EACH ROW EXECUTE FUNCTION set_updated_at();

CREATE INDEX IF NOT EXISTS idx_services_category ON services(category);

-- -------------------------------------------------------------------------
-- bookings
-- Structure only — no availability/conflict business logic beyond a
-- baseline uniqueness guard on (location, date, time). Full slot-checking
-- rules are Phase 3 scope.
-- -------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS bookings (
  id              BIGSERIAL PRIMARY KEY,
  customer_name   VARCHAR(150) NOT NULL,
  customer_phone  VARCHAR(30) NOT NULL,
  -- Nullable for now: current booking.html form does not collect email,
  -- but requirements.md calls for a confirmation email, so the column
  -- is reserved for when that field is added to the frontend.
  customer_email  VARCHAR(150),
  service_id      INTEGER NOT NULL REFERENCES services(id),
  location_id     INTEGER NOT NULL REFERENCES locations(id),
  booking_date    DATE NOT NULL,
  booking_time    TIME NOT NULL,
  status          VARCHAR(20) NOT NULL DEFAULT 'pending'
                    CHECK (status IN ('pending', 'confirmed', 'completed', 'cancelled')),
  notes           TEXT,
  created_at      TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at      TIMESTAMPTZ NOT NULL DEFAULT now(),

  -- Baseline guard: the same branch cannot hold two bookings at the exact
  -- same date/time. This is a data-integrity constraint, not the full
  -- availability logic (buffers, staff capacity, etc.) planned for Phase 3.
  CONSTRAINT uq_bookings_location_date_time UNIQUE (location_id, booking_date, booking_time)
);

DROP TRIGGER IF EXISTS trg_bookings_updated_at ON bookings;
CREATE TRIGGER trg_bookings_updated_at
  BEFORE UPDATE ON bookings
  FOR EACH ROW EXECUTE FUNCTION set_updated_at();

CREATE INDEX IF NOT EXISTS idx_bookings_location_date ON bookings(location_id, booking_date);
CREATE INDEX IF NOT EXISTS idx_bookings_status ON bookings(status);

-- -------------------------------------------------------------------------
-- contact_messages
-- One row per submission of the salon's contact form.
-- -------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS contact_messages (
  id          BIGSERIAL PRIMARY KEY,
  name        VARCHAR(150) NOT NULL,
  email       VARCHAR(150) NOT NULL,
  phone       VARCHAR(30),
  message     TEXT NOT NULL,
  status      VARCHAR(20) NOT NULL DEFAULT 'new'
                CHECK (status IN ('new', 'read', 'archived')),
  created_at  TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at  TIMESTAMPTZ NOT NULL DEFAULT now()
);

DROP TRIGGER IF EXISTS trg_contact_messages_updated_at ON contact_messages;
CREATE TRIGGER trg_contact_messages_updated_at
  BEFORE UPDATE ON contact_messages
  FOR EACH ROW EXECUTE FUNCTION set_updated_at();

CREATE INDEX IF NOT EXISTS idx_contact_messages_status ON contact_messages(status);
