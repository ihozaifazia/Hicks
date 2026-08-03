# requirements.md

# HICKS Website
## Software Requirements Specification (SRS)
**Version:** 1.0 (Draft)
**Project:** HICKS Salon Website
**Prepared For:** HICKS Salon
**Purpose:** Version 1 Development

---

# 1. Document Purpose

This document defines the complete functional and non-functional requirements for the HICKS Salon Website Version 1.

The purpose of this document is to establish a single source of truth describing what the application must achieve. It defines the expected behavior of the system, the business rules that govern it, and the scope of Version 1.

This document intentionally focuses on **what** the system must do rather than **how** it should be implemented. Technical implementation details are left to the implementation engineer provided they satisfy the requirements described here.

Every future modification to the project should remain consistent with the requirements documented here.

---

# 2. Project Overview

HICKS is a premium men's salon operating two branches within Bahawalpur.

The objective of this project is to provide HICKS with a professional online presence while simplifying appointment management through a lightweight administrative dashboard.

The website should accurately represent the quality of the HICKS brand while remaining extremely easy to operate by non-technical staff.

Version 1 is intentionally designed as a lightweight business website rather than a complete salon management system.

The software should assist the salon's existing workflow instead of attempting to replace it.

---

# 3. Business Information

## Business Type

Premium Men's Salon

---

## Branches

The business currently operates two physical branches.

Each branch maintains:

- Independent staff
- Independent appointment schedule
- Independent daily workload

Customers must choose the branch they wish to visit while creating a booking request.

---

## Expected Customer Volume

Average customer traffic is expected to remain approximately:

30–50 customers per day.

The application should comfortably support this workload without introducing unnecessary architectural complexity.

---

## Operating Hours

Business hours should reflect the current operating hours provided by HICKS.

Customers may only request appointments during business hours.

---

## Services

HICKS provides multiple salon services.

Services are maintained as business data rather than hardcoded values.

Each service contains:

- Name
- Estimated Price
- Availability

Customers may select multiple services during booking.

The estimated total shown during checkout is calculated using the selected services.

This estimated price is not the final bill.

Final payment is performed physically at the salon after all services have been completed.

---

## Contact Information

The website shall display official business contact information provided by HICKS.

This includes:

- Phone numbers
- Branch addresses
- Business hours

---

## Social Media

The website shall provide links to HICKS' official social media platforms.

These links shall be configurable without requiring changes to the website layout.

---

## Maps

Each branch shall provide location information allowing customers to easily locate the salon.

---

# 4. Project Objectives

The project has the following objectives.

## Professional Digital Presence

Present HICKS as a premium salon through a clean, responsive and modern website.

---

## Simplified Booking Process

Allow customers to submit appointment requests without requiring staff intervention during submission.

---

## Administrative Control

Provide managers with complete control over appointment confirmation.

Managers remain responsible for scheduling decisions.

The website should assist this process rather than automate it.

---

## Ease of Maintenance

The project should remain simple enough that future modifications can be performed without requiring extensive redevelopment.

Maintainability is considered more important than feature quantity.

---

## Scalability Within Scope

The application should be structured so that future features can be added without major rewrites.

However, Version 1 should avoid unnecessary enterprise functionality.

---

# 5. Project Constraints

The following constraints apply throughout the entire project.

These constraints override future implementation decisions unless explicitly changed.

---

## Keep The Project Lightweight

The website is designed for a local business.

Avoid introducing enterprise-level systems that provide little practical benefit.

---

## Preserve Simplicity

Whenever multiple solutions exist, preference should always be given to the simplest solution that satisfies the business requirements.

---

## Business Before Software

The software should adapt to HICKS' workflow.

The salon should never be forced to change its operating procedures simply to accommodate software limitations.

---

## Preserve Existing UI

The approved user interface should remain visually consistent.

Visual redesigns should only occur when explicitly approved.

Implementation work should primarily affect functionality rather than appearance.

---

## Maintainability

Future developers should easily understand:

- Project structure
- Booking workflow
- Business rules

Avoid unnecessary abstraction.

Avoid unnecessary complexity.

---

## Security

Security measures should protect the business without negatively affecting usability.

---

## Version 1 Scope

Version 1 focuses on:

- Business presentation
- Appointment requests
- Administrative booking management
- Responsive experience
- Reliable deployment

Features unrelated to these goals should not be introduced.

---

# 6. User Roles

The application currently supports two user roles.

---

## Visitor

Visitors are public users accessing the website.

Visitors may:

- Browse the website
- View services
- View gallery
- View branch locations
- View contact information
- Submit booking requests

Visitors may not:

- Access administrative pages
- View customer bookings
- Modify business information

---

## Branch Manager

Each branch has a single manager.

Managers are responsible for reviewing and managing bookings for their own branch.

Managers may:

- Log into the administration panel
- Review booking requests
- Confirm bookings
- Cancel bookings
- Mark bookings as completed
- Create bookings manually
- Assign stylists
- Assign appointment times
- Manage stylist availability
- View booking history

Managers may not:

- Access administrative functions belonging to another branch.

---

# 7. Functional Requirements

Version 1 consists of two primary systems.

1. Public Website
2. Administrative Dashboard

---

## Public Website

The public website represents the HICKS brand online.

Its primary purpose is to:

- Showcase the business.
- Present services.
- Encourage bookings.
- Provide business information.
- Allow customers to contact the salon.

---

### Homepage

The homepage serves as the primary entry point.

It should introduce the HICKS brand while directing visitors toward important sections of the website.

The homepage should contain:

- Hero section
- Business introduction
- Featured services
- Branch highlights
- Booking call-to-action
- Navigation to remaining pages

---

### Services Page

The services page presents the complete list of services offered by HICKS.

Each service should clearly display:

- Service name
- Estimated price
- Short description (where available)

Customers may select one or more services before beginning the booking process.

---

### Gallery

The gallery showcases authentic HICKS work.

Its purpose is to build trust and demonstrate service quality.

The gallery should support future expansion without requiring structural changes.

---

### Locations

The locations page presents both branches.

Each branch should display:

- Branch name
- Address
- Contact information
- Business hours
- Map
- Directions

Customers should be able to easily determine which branch they wish to visit.

---

### Contact

The contact page should provide convenient methods for customers to communicate with HICKS.

This includes:

- Phone numbers
- Email (if available)
- Branch information
- Contact form (if implemented)

---

# 8. Non-Functional Requirements

The entire application shall satisfy the following quality requirements.

## Responsiveness

The website must function correctly across:

- Desktop
- Laptop
- Tablet
- Mobile devices

No functionality should depend on a specific screen size.

---

## Performance

Pages should load quickly under normal operating conditions.

The expected customer volume does not justify complex optimization strategies.

Performance improvements should prioritize simplicity and maintainability.

---

## Reliability

The application should operate consistently without requiring frequent maintenance.

Common user actions should produce predictable results.

---

## Maintainability

Future developers should be able to understand the project with minimal onboarding.

Code organization should encourage future expansion without unnecessary restructuring.

---

## Usability

Users should be able to navigate the website intuitively.

Booking should require minimal effort while providing clear feedback at each step.

---

## Compatibility

The application shall be compatible with the project's selected deployment platform and supported browsers.

Implementation decisions should preserve long-term maintainability.

---

# 9. Booking System

The booking system is the core functionality of the HICKS website.

Unlike traditional appointment systems, this system does **not** automatically reserve appointment times for customers.

Instead, it collects booking requests and allows the branch manager to review, organize and confirm them according to the salon's existing workflow.

The booking system is intended to assist managers rather than replace managerial decision-making.

Customers request appointments.

Managers confirm appointments.

---

# 10. Customer Booking Workflow

The booking process shall consist of two stages:

1. Booking Form
2. Booking Confirmation

No booking shall be created until the customer completes both stages.

---

## 10.1 Booking Form

Customers shall provide the following information.

### Customer Information

Required:

- Full Name
- Pakistani Mobile Number

Optional:

- Email Address

---

### Service Selection

Customers may select one or more services.

Selected services shall appear in a continuously updated list before proceeding.

Services may be added or removed before checkout.

At least one service must remain selected.

---

### Branch Selection

Customers shall select the branch they wish to visit.

Branch names should clearly identify the physical location.

Bookings are always associated with exactly one branch.

---

### Date Selection

Customers may request appointments only within the following range:

Today → Seven Days From Today

Dates outside this range shall not be selectable.

---

### Preferred Time

Customers shall provide:

Primary Preferred Time

Options:

- Midday
- Afternoon
- Evening

---

### Secondary Preferred Time

Customers may optionally provide a secondary preferred time.

This allows managers greater flexibility when assigning appointments.

The secondary preference is optional.

Managers are not obligated to assign either preferred period.

The assigned appointment time remains entirely under managerial control.

---

## 10.2 Checkout

Selecting **Go To Checkout** shall open a booking summary.

The summary shall display:

- Customer name
- Contact number
- Email (if provided)
- Selected branch
- Requested date
- Primary preference
- Secondary preference
- Selected services
- Estimated total

The estimated total represents the combined prices of the selected services.

It is provided solely as a customer estimate.

The final amount payable is determined after services have been completed at the salon.

---

## 10.3 Booking Confirmation

The customer shall explicitly confirm the booking request.

Upon confirmation:

- Booking record is created.
- Booking status becomes **Pending**.
- Booking is assigned to the selected branch.
- Booking enters the Pending queue.

---

## 10.4 Customer Notification

After submission the customer shall receive an SMS acknowledging receipt of the booking request.

The notification shall inform the customer that:

- The request has been received.
- The booking is currently pending.
- Confirmation will follow after managerial review.
- The customer's position within the requested queue may be displayed if available.

This notification is not a booking confirmation.

---

# 11. Booking Status Lifecycle

Each booking shall always exist in exactly one status.

---

## Pending

Initial state.

The booking has been received but not yet reviewed.

Pending bookings remain pending until acted upon by a manager.

---

## Confirmed

The booking has been reviewed.

Manager has assigned:

- Stylist
- Appointment time
- Booking source

Customer receives confirmation notification.

---

## Completed

Customer has received the requested services.

Completed bookings become part of booking history.

---

## Cancelled

The booking has been cancelled.

Cancelled bookings are retained within booking history.

Bookings shall never be permanently deleted through normal operation.

---

# 12. Manager Workflow

Each branch manager is responsible for managing bookings belonging to their branch.

Managers remain fully responsible for appointment scheduling.

The software provides tools to assist this process.

---

## Pending Queue

Managers shall be able to view all pending booking requests.

Each pending booking shall display:

- Customer information
- Contact details
- Requested branch
- Requested date
- Preferred times
- Selected services
- Estimated total
- Submission date

Managers shall be able to open any booking for review.

---

## Reviewing Bookings

Managers may review every field submitted by the customer.

Customer information remains editable if corrections are required.

Managers should avoid unnecessary modification of customer-provided information.

---

## Manager Information

Managers complete the booking by assigning:

- Available Stylist
- Exact Appointment Time
- Booking Source

These fields are manager-only fields.

Customers cannot modify or view these values until confirmation.

---

## Confirmation

Once scheduling is complete:

Manager confirms booking.

Booking status changes:

Pending → Confirmed

Customer receives confirmation notification.

---

## Manual Booking Entry

Managers shall be able to create bookings manually.

Manual entry exists to support customers arriving through:

- Phone calls
- Walk-ins

Manager-created bookings follow the same workflow as website bookings.

---

## Completing Bookings

After services have been completed:

Manager marks booking as Completed.

Completed bookings move into History.

---

## Cancelling Bookings

Managers may cancel bookings.

Cancelled bookings move into History.

Cancellation does not delete booking information.

---

# 13. Booking Source

Each booking records its origin.

Available sources:

- Website
- Phone
- Walk-in

This field exists for reporting purposes only.

It does not alter booking behaviour.

---

# 14. Booking History

History serves as a permanent record of previous bookings.

History contains:

- Completed bookings
- Cancelled bookings

Each booking shall remain expandable.

Collapsed view should display only summary information.

Expanded view shall display all information associated with that booking.

History records shall never be automatically deleted.

---

# 15. Stylist Schedule

Each branch maintains an independent stylist schedule.

Managers assign appointments based upon stylist availability.

Managers may:

- Mark stylists active
- Mark stylists inactive
- Assign customers to stylists

The schedule spans:

Today → Seven Days Ahead

Previous schedules remain accessible as historical records.

The stylist schedule exists as a planning tool.

It does not automatically assign appointments.

---

# 16. Business Rules

The following rules govern the operation of the booking system.

---

Bookings are appointment requests.

They are not automatic reservations.

---

Managers retain full scheduling authority.

---

Customers request preferred periods.

Managers assign exact appointment times.

---

Primary and Secondary Preferred Times represent customer preferences only.

They are not guarantees.

---

Pending bookings remain pending until managerial action.

---

Estimated totals shown during checkout are informational only.

They are not invoices.

---

Payments are completed physically at the salon.

---

Completed and Cancelled bookings remain permanently available within History.

---

Bookings are never permanently deleted through normal system operation.

---

Only one branch manager exists for each branch.

---

The software assists scheduling.

Scheduling decisions remain managerial responsibilities.

---

# 17. Validation Rules

Every booking request shall undergo client-side and server-side validation.

Validation exists to preserve data integrity.

---

Required Fields

- Name
- Mobile Number
- Branch
- Date
- Primary Time Preference
- At least one service

---

Phone Numbers

Only valid Pakistani mobile numbers shall be accepted.

Invalid formats shall be rejected.

---

Email

Email remains optional.

When supplied it shall match valid email formatting.

---

Dates

Only dates between today and seven days ahead shall be accepted.

Past dates are invalid.

Dates beyond seven days are invalid.

---

Services

Customers must select at least one service.

Duplicate service selections should be prevented unless intentionally supported in future versions.

---

Branch

Submitted branch must match an existing HICKS branch.

---

Time Preferences

Primary preference is mandatory.

Secondary preference is optional.

If both are provided they should not be identical.

---

Submission Protection

Prevent duplicate submissions caused by repeated clicks or page refreshes.

---

# 18. Security Requirements

The booking system shall implement appropriate security measures while remaining lightweight.

Minimum requirements include:

- Server-side validation
- Client-side validation for usability
- CSRF protection
- Rate limiting
- Secure session management
- Password hashing for manager accounts
- Environment variables for sensitive configuration
- Protection against common injection attacks

Security measures should not unnecessarily complicate the project or negatively affect normal customer interaction.

---

# 19. Performance Requirements

The system is designed for approximately 30–50 customers per day.

The architecture should prioritize:

- Reliability
- Maintainability
- Fast response times
- Efficient database operations

Complex optimization strategies are unnecessary for Version 1.

The system should remain responsive under normal operating conditions.

---

# 20. UI and UX Requirements

## 20.1 Brand Presentation

The visual style should reflect HICKS' premium positioning.

Approved refinements may include:

- Authentic branch photography.
- Service photography.
- Subtle brand-specific textures.
- Refined typography.
- Restrained animations.
- Consistent spacing and visual hierarchy.

## 20.2 Booking Experience

The booking process must:

- Be understandable without instructions.
- Clearly distinguish a pending request from a confirmed appointment.
- Keep selected-service and price information visible at checkout.
- Show actionable validation errors.
- Prevent multiple submissions.
- Show loading feedback.
- Show a clear success result after submission.

## 20.3 Manager Experience

The manager dashboard must:

- Prioritize pending requests.
- Make confirmation actions clear.
- Avoid unnecessary fields.
- Use expandable booking details where appropriate.
- Remain usable on desktop and tablet.
- Remain functional on mobile, even if desktop is the primary management layout.

## 20.4 Consistency

Navigation, buttons, forms and feedback patterns must behave consistently across pages and devices.

---

# 20. Media Requirements

The website should use authentic HICKS media wherever available.

Media sources may include:

- Client-provided branch videos.
- Frames extracted from those videos.
- Client-approved photographs.
- Official HICKS social-media assets where permission is available.

Media must be:

- Selected for quality and relevance.
- Cropped appropriately.
- Optimized for web delivery.
- Given meaningful filenames.
- Given alternative text where meaningful.
- Used only with the client's permission.

Placeholder media should be replaced progressively as approved assets become available.

---

# 20. Performance Requirements

The application must remain suitable for approximately 30–50 customers per day.

It should:

- Avoid unnecessary client scripts.
- Avoid repeated database queries.
- Optimize images and video-derived frames.
- Use efficient serverless functions.
- Avoid complex caching systems unless a demonstrated need appears.
- Avoid infrastructure designed for high-scale enterprise workloads.

---

# 20. Deployment Requirements

The project must:

- Be stored in GitHub.
- Deploy to Vercel.
- Use environment variables for configuration.
- Connect to the approved hosted PostgreSQL database.
- Support separate development and production configuration.
- Deploy without editing source code to insert secrets.
- Use HTTPS in production.
- Provide a stable production URL.
- Support future custom-domain connection.

The deployment documentation must explain:

- Required environment variables.
- Database setup.
- Migration or schema setup.
- Email configuration.
- SMS configuration.
- Admin-account creation.
- Deployment steps.

---

# 20. Acceptance Criteria

Version 1 is complete only when all applicable criteria below pass.

## 20.1 Public Website

- All public pages load successfully.
- Navigation contains no unintended dead links.
- Services display approved data.
- Both branches display approved information.
- Social and map links use confirmed destinations.
- The site is responsive across supported devices.

## 20.2 Booking Request

- Customer can select multiple services.
- Estimated total updates correctly.
- Customer can select one branch.
- Customer can select one date from the seven-day window.
- Customer can select primary and optional secondary preference.
- Checkout displays the full summary.
- Booking is not stored before checkout confirmation.
- Successful submission creates a pending booking.
- Duplicate submission is prevented.
- Initial pending notification is attempted and its result recorded.

## 20.3 Manager Booking Management

- Manager can log in and log out.
- Manager sees only their branch.
- Manager can view pending requests.
- Manager can assign stylist and exact time.
- Manager can confirm a booking.
- Manager can cancel a pending or confirmed booking.
- Manager can mark a confirmed booking completed.
- Completed and cancelled bookings appear in history.
- Manager can create phone and walk-in bookings.

## 20.4 Stylist Schedule

- Manager can view the seven-day schedule.
- Manager can view historical schedule records.
- Manager can mark stylists active or inactive.
- Confirmed bookings appear against the assigned stylist.

## 20.5 Notifications

- Pending SMS uses pending wording.
- Confirmation SMS uses confirmed wording.
- Confirmation email is sent only for confirmed bookings when an email exists.
- Notification failures are visible to the manager.

## 20.6 Security and Reliability

- Invalid public requests are rejected.
- Unauthorized manager access is blocked.
- Secrets are not committed.
- Public endpoints are rate-limited.
- State-changing protected operations include appropriate request protection.
- Errors do not expose sensitive technical details.

## 20.7 Deployment

- Production deployment succeeds on Vercel.
- Production database connection works.
- GitHub deployment workflow works.
- Required environment variables are documented.

---

# 20. Edge Cases

The system must be tested against at least the following cases.

## 20.1 Customer Input

- Empty name.
- Whitespace-only name.
- Extremely long name.
- Unsupported characters or malicious markup.
- Empty phone number.
- Invalid Pakistani mobile number.
- Foreign phone number.
- Formatted number with spaces or dashes.
- Empty optional email.
- Malformed email.
- Excessively long email.

## 20.2 Service Selection

- No services selected.
- One service selected.
- Multiple services selected.
- Same service added twice.
- Service disabled after the booking page was opened.
- Price changed before final submission.

## 20.3 Branch and Date

- No branch selected.
- Invalid branch submitted manually.
- Inactive branch submitted.
- Today selected.
- Yesterday submitted manually.
- Eighth day or later submitted manually.
- Date changes while checkout is open.
- Local date boundary around midnight Pakistan time.

## 20.4 Time Preferences

- No primary preference.
- Valid primary with no secondary.
- Identical primary and secondary.
- Unknown value submitted manually.
- Manager assigns a time outside both preferences.

The final case is valid because preferences do not restrict managerial assignment.

## 20.5 Submission Behaviour

- Double-click submit.
- Slow network.
- Browser refresh during submission.
- Back navigation after submission.
- Re-submission of the same request.
- Database temporarily unavailable.
- SMS provider unavailable.
- Email provider unavailable.

## 20.6 Manager Actions

- Wrong password.
- Expired session.
- Direct access to a protected URL.
- Branch manager attempts to access the other branch.
- Confirmation without stylist.
- Confirmation without exact time.
- Cancellation of pending booking.
- Cancellation of confirmed booking.
- Completion of pending booking.
- Completion of already completed booking.
- Booking referenced after it has moved to history.

## 20.7 Schedule

- Stylist marked inactive while unassigned.
- Stylist marked inactive while future bookings exist.
- Two bookings assigned to overlapping times for one stylist.
- Different stylists assigned at the same time.
- Schedule date outside the seven-day current view.
- Historical schedule retrieval.

The implementation must prevent clearly conflicting assignments for the same stylist.

## 20.8 History

- Completed record expands correctly.
- Cancelled record expands correctly.
- Historical information remains unchanged.
- Large history remains usable with search or filtering.

## 20.9 Responsive and Media

- Long service names.
- Long addresses.
- Missing optional image.
- Slow-loading image.
- Mobile menu operation.
- Checkout on a narrow screen.
- Admin booking details on tablet and mobile.

---

# 20. Current Version Scope

Version 1 includes:

- Public HICKS website.
- Homepage.
- Services.
- Gallery.
- Locations.
- Contact functionality where approved.
- Authentic HICKS branding and media integration.
- Multi-service booking request.
- Checkout review.
- Pending booking creation.
- Manager confirmation.
- Phone and walk-in booking entry.
- Four booking statuses.
- Branch-specific manager authorization.
- Stylist activity controls.
- Seven-day stylist schedule.
- Booking history.
- SMS pending and confirmation notifications.
- Confirmation email.
- Security measures.
- GitHub and Vercel deployment.
- Hosted database integration.

Features not listed in this section are not required for Version 1 unless the requirements are formally updated.

---

# 20. Review Record

## Review Pass 1 — Consistency and Missing Requirements

Problems found and resolved:

1. **Seven-day ambiguity**
   - Standardized to exactly seven selectable dates: today plus six following days.

2. **Business-hours inconsistency**
   - Used the latest project decision: approximately 11:00 AM–10:30 PM.
   - Final client confirmation is still required.

3. **Queue wording**
   - Queue position is optional and may only be shown when it can be calculated accurately.

4. **Notification timing**
   - Initial SMS acknowledges pending status.
   - Confirmation SMS and email occur only after manager confirmation.

5. **Editing after confirmation**
   - Excluded from Version 1.
   - Managers cancel and recreate when a major change is needed.

6. **Status drift**
   - Removed checked-in and no-show statuses.
   - Retained exactly four approved statuses.

7. **Booking sources**
   - Removed `Manual`.
   - Retained Website, Phone and Walk-in.

8. **Estimated total**
   - Clarified that it is informational and may differ from the final counter bill.

9. **Cross-branch access**
   - Added explicit branch-level authorization.

10. **Notification failure**
    - Added failure recording without changing the booking incorrectly.

## Review Pass 2 — Scope and Operability

Problems found and resolved:

1. Removed enterprise feature drift.
2. Confirmed no automatic scheduling or duration prediction.
3. Kept stylist scheduling high-level but implementable.
4. Removed unnecessary implementation detail.
5. Avoided unnecessary multi-manager conflict handling.
6. Treated incomplete branch, contact, pricing and media data as client-confirmed content.
7. Confirmed booking creation occurs only after checkout confirmation.
8. Confirmed only Completed and Cancelled bookings enter history.
9. Confirmed Phone and Walk-in bookings bypass website checkout.
10. Removed any guaranteed 30-minute review deadline.

## Final Audit

The document has been checked for:

- Contradictions.
- Duplicated requirements.
- Unapproved features.
- Booking-status consistency.
- Customer and manager workflow consistency.
- Branch separation.
- Notification timing.
- Validation completeness.
- Edge-case coverage.
- Version 1 scope discipline.

No unresolved architectural discrepancy remains.

The following business content still requires confirmation before launch:

- Final branch naming.
- Exact second-branch address.
- Branch-specific phone numbers.
- Final service catalogue and prices.
- Exact Midday/Afternoon/Evening boundaries.
- Official map links.
- Official social links.
- Final email and SMS service configuration.
- Final media selection.
