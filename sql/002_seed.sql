-- =========================================================================
-- 002_seed.sql
-- Phase 2 — Database Design
--
-- Seeds locations and services with the real content already displayed
-- in the existing frontend (locations.html, service.html), so the data
-- layer matches what visitors already see. No bookings or contact
-- messages are seeded — those are transactional records, not reference
-- data.
--
-- Safe to re-run: uses ON CONFLICT DO NOTHING guards keyed on name.
-- =========================================================================

-- -------------------------------------------------------------------------
-- locations (from locations.html)
-- -------------------------------------------------------------------------
INSERT INTO locations (name, address, phone, opening_hours)
VALUES
  (
    'Hicks Bahawalpur - Kausar Colony',
    'Fandi Center, Kausar Colony, Bahawalpur, Punjab',
    '+92 62 2883145',
    '{"mon_thu": "11:00-22:00", "fri": "11:00-23:00", "sat": "11:00-23:00", "sun": "11:00-21:00"}'
  ),
  (
    'Hicks Men Salon Branch 2',
    'Bahawalpur Premier District',
    NULL,
    '{"mon_thu": "11:00-22:00", "fri": "11:00-23:00", "sat": "11:00-23:00", "sun": "11:00-21:00"}'
  )
ON CONFLICT DO NOTHING;

-- -------------------------------------------------------------------------
-- services (from service.html)
-- -------------------------------------------------------------------------
INSERT INTO services (category, name, description, price_cents)
VALUES
  ('Hair Designing', 'Signature Sculpt', 'A comprehensive consultation followed by a precision cut tailored to your head shape and hair growth pattern.', 8500),
  ('Hair Designing', 'Classic Tailoring', 'A comprehensive consultation followed by a precision cut tailored to your head shape and hair growth pattern.', 6500),
  ('Hair Designing', 'Executive Trim', 'A comprehensive consultation followed by a precision cut tailored to your head shape and hair growth pattern.', 5000),

  ('Hair Wash', 'Scalp Therapy', 'A deep exfoliating scalp massage and premium conditioning treatment designed to revitalize hair health.', 4000),
  ('Hair Wash', 'Charcoal Purge', 'A deep exfoliating scalp massage and premium conditioning treatment designed to revitalize hair health.', 3500),
  ('Hair Wash', 'Basic Cleanse', 'A deep exfoliating scalp massage and premium conditioning treatment designed to revitalize hair health.', 2500),

  ('Beard Styling', 'Full Ritual', 'The ultimate grooming experience including hot towels, straight razor detailing, and premium beard oil application.', 7000),
  ('Beard Styling', 'Line Work', 'The ultimate grooming experience including hot towels, straight razor detailing, and premium beard oil application.', 4500),
  ('Beard Styling', 'Moisture Seal', 'The ultimate grooming experience including hot towels, straight razor detailing, and premium beard oil application.', 3000),

  ('Package', 'The Hicks Signature', 'Complete redesign, therapy wash, and beard ritual.', 18000)
ON CONFLICT DO NOTHING;
