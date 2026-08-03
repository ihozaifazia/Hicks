instructions.md

1. # Purpose

This document defines the development standards, engineering rules, and project-wide instructions that must be followed throughout the development of the HICKS Website.

Unlike `requirements.md`, which specifies what the system must do, and `progress.md`, which defines the project's development roadmap, this document establishes how development should be carried out. It provides a consistent set of instructions that govern implementation decisions, project organization, code quality, documentation practices, and development workflow.

These instructions apply throughout the entire lifecycle of the project and are intended to ensure that development remains organized, maintainable, predictable, and aligned with the agreed project scope.

Before beginning any development work, the engineer should review this document together with the other project documentation to understand the current project state, applicable business rules, and development expectations.

The instructions contained within this document should be treated as project standards rather than implementation suggestions. Unless explicitly overridden by the client or project owner, they should be followed throughout every development session.

2. # Document Hierarchy

The HICKS Website project is managed through a collection of project documents, each serving a distinct purpose. To maintain consistency throughout development, the engineer should consult these documents in the order defined below.

When multiple documents reference the same feature or workflow, they should be interpreted according to the following hierarchy.

---

## 1. instructions.md

This document has the highest priority.

It defines the engineering standards, development rules, project workflow, coding expectations, documentation practices, and business rules that govern the entire project.

Its purpose is to explain **how** development should be carried out.

---

## 2. requirements.md

This document defines the complete functional and non-functional requirements of the HICKS Website.

It describes **what** must be built, how the system is expected to behave, and the agreed business workflows.

Whenever implementing or modifying a feature, this document should be treated as the primary functional specification.

---

## 3. progress.md

This document defines the project's development roadmap.

It identifies the current development phase, describes the objectives of each phase, and determines what work should be completed before progressing to the next stage.

Only the currently active phase should be implemented unless explicitly instructed otherwise.

---

## 4. project_concerns.md

This document records temporary project concerns, unresolved questions, implementation blockers, missing business information, client decisions awaiting confirmation, and other issues that may affect development.

It should be reviewed before beginning work to ensure that known concerns are considered during implementation.

Whenever new concerns are discovered, they should be documented here rather than resolved through assumptions.

---

## 5. hicks_research_report.md

This document serves as the project's business reference.

It contains verified information collected from the client, publicly available business information, and other approved project assets that may be required during implementation.

It should be consulted whenever accurate business information is needed.

---

## Resolving Conflicts

If conflicting information is encountered between project documents, the engineer should first determine whether the conflict results from an outdated document or an approved change in project scope.

If the conflict cannot be resolved with certainty, implementation of the affected functionality should pause until clarification is obtained. The engineer should not resolve conflicts by making assumptions or introducing undocumented business logic.

Any unresolved conflicts should be documented in `project_concerns.md` for review before development continues.

3. # Before Beginning Development

Before implementing, modifying, or reviewing any part of the HICKS Website project, the engineer should complete the following preparation steps to ensure that development remains aligned with the current project scope, business requirements, and development roadmap.

Development should never begin without first understanding the current state of the project.

---

## Step 1 — Review Project Documentation

Review the project documentation in the following order:

1. `instructions.md`
2. `progress.md`
3. `requirements.md`
4. `project_concerns.md` (if present)
5. `hicks_research_report.md` (when business information or business assets are required)

The purpose of this review is to understand the current development phase, project rules, agreed business workflows, known concerns, and any client-approved business information relevant to the task.

---

## Step 2 — Determine the Active Development Phase

Identify the current active phase from `progress.md`.

Before writing any code, understand:

- The purpose of the current phase.
- The objectives of the current phase.
- The expected deliverables.
- The completion criteria.

Only implement functionality that belongs to the active development phase unless explicitly instructed otherwise by the project owner.

---

## Step 3 — Understand Existing Implementation

Before modifying existing functionality:

- Review the relevant implementation.
- Understand how the current feature operates.
- Identify any dependencies that may be affected.
- Ensure that proposed changes do not unintentionally alter unrelated functionality.

Existing behaviour should be understood before any modifications are introduced.

---

## Step 4 — Review Business Rules

Before implementing business logic, review the agreed business workflows defined within `requirements.md`.

The engineer should fully understand how the feature is expected to operate from a business perspective before making implementation decisions.

Business logic should never be inferred through assumptions when documented requirements already exist.

---

## Step 5 — Review Known Project Concerns

Before beginning work, review `project_concerns.md` for any unresolved issues, pending client decisions, missing information, or implementation constraints that may affect the current task.

Development should take these concerns into account throughout implementation.

---

## Step 6 — Confirm Scope

Before writing code, confirm that the requested work:

- Belongs to the current project.
- Falls within the agreed Version 1 scope.
- Belongs to the current development phase.
- Does not conflict with existing project documentation.

If the requested implementation falls outside the approved scope or conflicts with documented requirements, implementation should pause until clarification has been obtained.

---

## Step 7 — Plan Before Implementation

Before making changes to the codebase, identify:

- The files that are expected to be modified.
- Any new files that may be required.
- Potential effects on existing functionality.
- The expected outcome once implementation is complete.

Major implementation decisions should be considered before development begins rather than during implementation.

---

Only after completing these preparation steps should development begin.

4. # Project Development Rules

The following rules govern all development carried out on the HICKS Website project. They are intended to ensure that implementation remains consistent with the agreed project scope, maintains high code quality, and reflects the operational requirements of the business.

These rules apply throughout the entire development lifecycle unless explicitly overridden by the project owner.

---

## Develop Only Within the Approved Scope

Only implement functionality that has been approved within the project's documented requirements.

Features, workflows, business logic, or user interface elements that have not been agreed upon should not be introduced, even if they appear beneficial.

If an enhancement is identified during development, it should be recorded as a potential future improvement rather than implemented immediately.

---

## Respect the Current Development Phase

Development should always follow the roadmap defined in `progress.md`.

Work should be limited to the objectives and deliverables of the currently active phase.

Features belonging to future phases should not be partially implemented, prepared, or introduced ahead of schedule unless explicitly instructed.

---

## Follow Documented Business Requirements

Implementation should always follow the workflows and business logic defined within `requirements.md`.

The engineer should not redesign or simplify documented workflows for convenience or technical preference.

Whenever implementation choices exist, preference should always be given to the documented business requirements.

---

## Avoid Assumptions

Business decisions should never be inferred through assumptions.

If required information is missing, ambiguous, contradictory, or awaiting client confirmation, implementation of the affected functionality should pause until clarification is available.

Where appropriate, unresolved matters should be documented in `project_concerns.md`.

---

## Preserve Simplicity

The HICKS Website is intended to be a practical business website rather than an enterprise-scale software platform.

Solutions should remain as simple as possible while fully satisfying the documented requirements.

Avoid introducing unnecessary abstraction, excessive configuration, premature optimization, or features that increase complexity without providing meaningful business value.

---

## Maintain Consistency

New functionality should remain consistent with the existing project architecture, coding style, naming conventions, user interface, and user experience.

Development should strengthen the consistency of the project rather than introduce multiple implementation styles.

---

## Preserve Existing Functionality

New development should not unintentionally alter or break existing features.

Before modifying existing systems, understand how they currently operate and ensure that unrelated functionality continues to behave as expected after implementation.

Regression should always be avoided.

---

## Reuse Before Creating

Whenever practical, reuse existing components, utilities, helper functions, layouts, and project structures before introducing new implementations.

Duplicate logic should be avoided where a suitable solution already exists.

---

## Prioritize Maintainability

Implementation should favour readability, maintainability, and long-term stability over unnecessarily clever or highly optimized solutions.

Code should be organized in a manner that allows future developers to understand, extend, and maintain the project efficiently.

---

## Protect Business Logic

Core business workflows should remain stable throughout development.

Changes to booking workflows, manager responsibilities, customer interactions, booking states, notification behaviour, or other agreed operational processes should only occur following explicit approval from the project owner.

---

## Do Not Perform Unnecessary Refactoring

Refactoring should only be performed when it clearly improves maintainability, resolves technical debt that affects current development, or is necessary to implement approved functionality.

Stable, functioning code should not be rewritten solely for stylistic reasons or personal preference.

---

## Resolve Problems, Do Not Circumvent Them

When defects or implementation issues are encountered, identify and resolve their root cause rather than introducing temporary workarounds that may create future maintenance problems.

If a complete solution is not currently possible due to missing information or project constraints, document the issue rather than masking it with incomplete behaviour.

---

## Preserve Version 1 Scope

The objective of Version 1 is to deliver the agreed HICKS Website with the functionality documented in the project requirements.

Features intended for possible future releases should remain outside the Version 1 implementation unless explicitly approved.

Development should remain focused on completing the agreed project rather than expanding its scope.

---

## Seek Clarity Before Continuing

If the engineer is uncertain about the correct implementation of a feature, workflow, or business rule, clarification should be obtained before development continues.

It is preferable to pause implementation briefly than to introduce behaviour that conflicts with the agreed project requirements.

5. # Phase Development Rules

The HICKS Website is developed using a structured, phase-based approach. Each phase represents a complete development milestone with a clearly defined purpose, objectives, deliverables, and completion criteria.

Development should always follow the sequence defined in `progress.md`. Each phase builds upon the previous one, and implementation should progress in a controlled and predictable manner.

---

## Work Only Within the Active Phase

Before beginning development, identify the current active phase from `progress.md`.

Only implement functionality that belongs to the objectives and deliverables of that phase.

Do not begin work on future phases unless explicitly instructed by the project owner.

---

## Understand the Entire Phase Before Writing Code

Before implementing any feature within a phase, review the entire phase definition in `progress.md`.

The engineer should understand:

- The purpose of the phase.
- The complete description of the phase.
- The objectives.
- The expected deliverables.
- The completion criteria.

Implementation decisions should always support the overall goal of the phase rather than focusing solely on individual tasks.

---

## Complete Features as Functional Units

Features should be developed as complete, working units whenever practical.

Avoid leaving partially implemented workflows, incomplete business logic, placeholder functionality, or disconnected user experiences unless explicitly approved as temporary development work.

A feature should be considered complete only when it performs its intended function reliably within the scope of the current phase.

---

## Preserve Phase Boundaries

Features that belong to future phases should not be partially introduced simply because they appear related to the current work.

Temporary placeholders may be used only where necessary to support current development, but future business logic, workflows, or interfaces should remain unimplemented until their designated phase.

This helps maintain a clear separation of responsibilities between development phases.

---

## Respect Phase Dependencies

Some functionality depends on systems implemented in earlier phases.

Before implementing a feature, ensure that all required dependencies have already been completed.

If a dependency is incomplete or requires modification, resolve that issue first before continuing with dependent functionality.

---

## Do Not Mark a Phase as Complete

The engineer should never assume that a phase has been completed.

A phase should only be considered complete after:

- All objectives have been achieved.
- All deliverables have been implemented.
- All completion criteria have been satisfied.
- The implementation has been reviewed and approved by the project owner.

Until then, the phase should remain in its current status.

---

## Validate the Phase Before Moving Forward

Before beginning work on the next phase, confirm that the current phase operates as intended.

Implementation should be sufficiently stable to support the next stage of development without requiring significant rework.

If defects or incomplete functionality remain within the current phase, they should be resolved before progressing whenever reasonably possible.

---

## Record Changes to Phase Progress

Whenever approved work changes the status of a development phase, update `progress.md` accordingly.

Progress updates should accurately reflect the current state of development and should never overstate project completion.

Phase statuses should only be updated to:

- Pending
- In Progress
- Completed
- On Hold (when explicitly required)

---

## Handle Scope Changes Carefully

If the client approves additional requirements that affect the current or future phases, the engineer should not immediately implement those changes.

Instead:

- Determine which phase the new requirement belongs to.
- Update the project documentation as instructed.
- Implement the requirement only after it has been incorporated into the approved project scope.

This ensures that the development roadmap remains organized and accurately reflects the project's evolution.

---

## Prioritize Phase Completion Over Expansion

The primary objective of development is to successfully complete each phase according to its documented requirements.

Avoid expanding a phase with optional enhancements, speculative improvements, or future functionality before its defined objectives have been fully achieved.

Each completed phase should represent a stable and fully functional milestone that provides a reliable foundation for the phases that follow.

6. # Business Rules

The following business rules define the operational behaviour of the HICKS Website and represent decisions agreed upon by the project owner and the client.

These rules are considered permanent unless explicitly revised through an approved change in project requirements. They should not be altered, simplified, or replaced during development.

Whenever implementing business logic, the engineer should ensure that these rules remain consistent throughout the system.

---

## Booking Request Workflow

A booking submitted through the website is a **booking request**, not a confirmed appointment.

Every customer booking must follow the defined booking workflow:

1. Customer submits a booking request.
2. Booking is stored in the database.
3. Booking enters the **Pending** state.
4. Customer receives a Pending SMS acknowledging receipt of the booking request.
5. The booking awaits manager review.
6. The manager reviews and processes the booking.
7. The booking is either:
   - Confirmed, or
   - Cancelled.
8. Completed bookings move to booking history.
9. Cancelled bookings also move to booking history.

Bookings should never bypass this workflow.

---

## Manager-Controlled Scheduling

Appointment scheduling is entirely controlled by the branch manager.

The system must not automatically:

- Confirm bookings.
- Assign appointment times.
- Assign stylists.
- Schedule appointments.
- Reassign appointments.

Managers remain responsible for making all scheduling decisions based on business operations and stylist availability.

---

## Customer Responsibilities

Customers are responsible for providing accurate booking information.

Customers may:

- Select one or more services.
- Select their preferred branch.
- Select an available booking date.
- Select a primary preferred time period.
- Select a secondary preferred time period.
- Review their booking before submission.

Customers do not choose an exact appointment time.

The finalized appointment time is assigned by the manager during booking review.

---

## Manager Responsibilities

Managers are responsible for operating the booking system for their assigned branch.

Managers should be able to:

- Review pending bookings.
- Edit booking information when necessary.
- Assign stylists.
- Assign finalized appointment times.
- Specify the booking source.
- Confirm bookings.
- Cancel bookings.
- Create bookings for phone customers.
- Create bookings for walk-in customers.
- Manage stylist availability.
- Review booking history.

Managers should always retain control over booking decisions.

---

## Booking Sources

Every booking must belong to one of the following sources:

- Website
- Phone Call
- Walk-in

Regardless of its origin, every booking should be managed using the same booking workflow and stored within the same booking system.

---

## Booking Statuses

Bookings should always exist in one of the following states:

- Pending
- Confirmed
- Completed
- Cancelled

Bookings should transition between these states only through approved business actions.

Invalid or undefined booking states should never exist.

---

## Stylist Assignment

Each confirmed booking should be assigned to a stylist by the manager.

Stylist assignment is performed manually.

The system should assist the manager by providing stylist availability but should never automatically choose a stylist.

---

## Stylist Availability

Managers should be able to control stylist availability.

Stylists may be marked as:

- Active
- Inactive

Inactive stylists should not be considered available for new appointments until they are reactivated.

---

## Estimated Pricing

The total displayed during the customer checkout process is an **estimated price** only.

It exists solely to provide customers with an approximate understanding of the expected service cost.

Final payment is determined after services have been completed at the salon.

The website should never treat the estimated total as a final invoice.

---

## Notifications

Customers should receive notifications only at approved stages of the booking workflow.

Currently supported notifications are:

### Pending

Immediately after submitting a booking request:

- Pending SMS

### Confirmed

After manager confirmation:

- Confirmation SMS
- Confirmation Email (only if an email address was provided)

No additional notification types should be introduced unless approved within future project requirements.

---

## Booking History

Completed and cancelled bookings should never be permanently removed from the system.

Instead, they should be preserved within the booking history.

Booking history should retain:

- Customer information.
- Booking information.
- Manager-assigned information.
- Booking source.
- Final booking status.

History should serve as a permanent business record.

---

## Customer Booking Modifications

After a booking request has been submitted, customers cannot modify their booking through the website.

If changes are required before the appointment, they are handled by the branch manager during booking review.

Customer self-service booking modifications are outside the agreed Version 1 scope.

---

## Version 1 Simplicity

The HICKS Website is intentionally designed to remain operationally simple.

Business workflows should prioritize:

- Reliability.
- Ease of use.
- Manager control.
- Clear customer experience.

Features that increase operational complexity without providing clear business value should not be introduced into Version 1 unless explicitly approved by the project owner.

7. # Code Quality Standards

The HICKS Website is intended to be a long-term, maintainable business application. Every implementation should prioritize readability, stability, consistency, and ease of future maintenance over unnecessary complexity or short-term convenience.

The engineer should treat every piece of code as production-quality code.

---

## Write Maintainable Code

Code should be easy to understand, modify, debug, and extend.

Prioritize:

- Readability.
- Clear structure.
- Logical organization.
- Consistent formatting.
- Predictable behaviour.

Future developers should be able to understand the purpose of a file or function without excessive effort.

---

## Keep the Codebase Modular

Features should be organized into logical, self-contained modules wherever practical.

Responsibilities should be clearly separated so that changes made to one feature have minimal impact on unrelated parts of the system.

Avoid unnecessarily large files that combine unrelated functionality.

---

## Follow Existing Project Structure

All new files, folders, and modules should follow the established project architecture.

Avoid introducing alternative organizational patterns unless they provide a clear improvement and are approved by the project owner.

Project consistency is more valuable than personal coding preference.

---

## Use Clear Naming Conventions

Variable names, function names, component names, files, and folders should clearly describe their purpose.

Avoid:

- Ambiguous names.
- Single-letter identifiers (except standard loop variables).
- Unexplained abbreviations.
- Inconsistent naming styles.

Names should reflect the business terminology used throughout the project whenever possible.

---

## Avoid Duplicate Logic

Functionality that already exists should be reused rather than rewritten.

Before creating new logic, determine whether an existing utility, helper, component, or function already performs the required task.

Duplicate code increases maintenance effort and should be avoided whenever reasonably possible.

---

## Keep Functions Focused

Each function should have a single, clearly defined responsibility.

Large functions performing multiple unrelated tasks should be divided into smaller, reusable units where appropriate.

Functions should remain easy to read, test, and maintain.

---

## Preserve Readability

Code should prioritize clarity over cleverness.

Avoid unnecessarily complex expressions, deeply nested logic, excessive chaining, or implementations that are difficult to understand without extensive analysis.

Simple, explicit code is preferred whenever it achieves the same result.

---

## Maintain Consistent User Interface Standards

User interface components should remain visually and behaviourally consistent throughout the website.

Maintain consistency in:

- Layout.
- Typography.
- Spacing.
- Colours.
- Icons.
- Buttons.
- Forms.
- Navigation.
- Error messages.
- Success messages.

New interfaces should follow the established design language of the project.

---

## Preserve Responsive Design

All newly implemented pages, components, and features should remain responsive across supported desktop, tablet, and mobile devices.

Responsive behaviour should never be sacrificed when introducing new functionality.

---

## Prioritize Security

Security should be considered throughout development rather than added later.

Implementation should include appropriate safeguards against common web vulnerabilities, including but not limited to:

- Input validation.
- Output sanitization.
- SQL injection.
- Cross-Site Scripting (XSS).
- Cross-Site Request Forgery (CSRF).
- Unauthorized access.
- Improper authentication or authorization.

Sensitive information should never be exposed to the client unnecessarily.

---

## Handle Errors Gracefully

Unexpected situations should be handled in a controlled manner.

Users should receive clear, meaningful feedback when an operation cannot be completed.

Internal implementation details, stack traces, database information, or sensitive system data should never be exposed through error messages.

---

## Optimize for Reliability

Code should behave consistently under normal usage and expected edge cases.

Avoid solutions that depend upon fragile assumptions or undocumented behaviour.

Implementation should favour predictable and stable operation over unnecessary optimization.

---

## Comment Only When Necessary

Code should be self-explanatory whenever possible.

Comments should be used to explain:

- Complex business logic.
- Non-obvious implementation decisions.
- Important technical constraints.

Comments should not describe behaviour that is already obvious from the code itself.

---

## Remove Temporary Development Code

Before considering a feature complete, remove:

- Debug statements.
- Temporary logging.
- Test variables.
- Experimental code.
- Unused functions.
- Dead code.
- Obsolete comments.

The production codebase should contain only code that serves an active purpose.

---

## Maintain Production Quality

Every implementation should be developed with the expectation that it may be deployed to production.

Avoid shortcuts that create unnecessary technical debt or require future rework.

Each completed feature should meet the project's standards for maintainability, stability, readability, security, and overall software quality.

8. # Modification Rules

The HICKS Website is expected to evolve over multiple development phases. As new functionality is introduced, existing code will occasionally require modification. The following rules ensure that changes improve the project without introducing instability, regressions, or unnecessary complexity.

Before modifying any existing implementation, the engineer should fully understand the current behaviour and evaluate how the proposed changes may affect the rest of the system.

---

## Understand Before Modifying

Before making changes to any existing code:

- Read the relevant implementation.
- Understand its purpose.
- Understand how it interacts with other parts of the project.
- Identify any dependencies that may be affected.

Code should never be modified based solely on assumptions.

---

## Preserve Existing Functionality

The primary objective of any modification is to improve or extend the system without breaking existing behaviour.

Unless explicitly required, existing functionality should continue to operate exactly as before after the modification has been completed.

Every change should minimize the risk of introducing regressions.

---

## Modify Only What Is Necessary

Limit changes to the smallest practical scope.

Avoid rewriting unrelated files, components, or modules simply because they could be improved.

Only modify code that is directly affected by the requested implementation or necessary to support it.

---

## Preserve Project Architecture

Existing project architecture should be respected throughout development.

Avoid introducing new architectural patterns, folder structures, frameworks, or coding styles unless they provide a significant long-term benefit and have been approved by the project owner.

Consistency throughout the codebase is more valuable than individual implementation preferences.

---

## Preserve Business Logic

Existing business workflows should remain unchanged unless an approved requirement specifically requires their modification.

Core operational behaviour—including booking workflows, manager responsibilities, customer interactions, notification behaviour, booking states, and scheduling decisions—should never be altered through implementation convenience.

If a requested change conflicts with documented business requirements, clarification should be obtained before proceeding.

---

## Avoid Unnecessary Refactoring

Refactoring should only be performed when it:

- Improves maintainability.
- Reduces unnecessary complexity.
- Removes technical debt affecting the current task.
- Is required to implement approved functionality.

Working code should not be rewritten solely for stylistic reasons or personal coding preference.

---

## Reuse Existing Solutions

Before introducing new functionality, determine whether existing components, utilities, helper functions, validation logic, or services can be extended or reused.

Avoid creating duplicate implementations when a suitable solution already exists within the project.

---

## Maintain Backward Compatibility

When extending existing features, ensure that previously supported behaviour continues to function unless an approved project requirement explicitly replaces it.

New functionality should integrate with existing systems rather than requiring unrelated features to be redesigned.

---

## Keep Changes Consistent

All modifications should follow the project's established:

- Naming conventions.
- File organization.
- Coding style.
- User interface standards.
- Documentation style.

New code should appear as a natural extension of the existing project rather than a separate implementation.

---

## Validate Every Modification

After completing any modification, verify that:

- The intended change functions correctly.
- Existing functionality continues to operate.
- No new validation issues have been introduced.
- User interface consistency has been preserved.
- No unintended side effects are present.

Changes should not be considered complete until both the modified feature and any affected functionality have been verified.

---

## Remove Obsolete Code

If existing code becomes unnecessary as a direct result of an approved modification, remove it once it is no longer required.

Avoid leaving:

- Dead code.
- Duplicate implementations.
- Unused variables.
- Obsolete helper functions.
- Deprecated validation logic.
- Temporary compatibility code that no longer serves a purpose.

The codebase should remain clean and maintainable after every implementation.

---

## Document Significant Changes

When a modification substantially changes the behaviour, structure, or implementation of a feature, include the change within the session completion report.

The report should clearly identify:

- The reason for the modification.
- Files that were modified.
- Any effects on related functionality.
- Any additional testing performed.

This ensures that future development sessions have a clear understanding of significant project changes.

---

## Prefer Permanent Solutions

Whenever defects or implementation issues are encountered, resolve their underlying cause rather than introducing temporary workarounds.

If the correct solution cannot be implemented due to missing requirements or unresolved business decisions, document the issue in `project_concerns.md` and postpone implementation until sufficient information becomes available.

Long-term maintainability should always take precedence over short-term convenience.

9. # Validation Requirements

Every implementation completed during the development of the HICKS Website must be validated before it is considered complete.

Validation is intended to confirm that newly implemented functionality operates as expected while ensuring that existing features continue to function correctly. No implementation should be considered complete solely because it compiles successfully or appears visually correct.

The engineer is responsible for performing reasonable validation on every completed task before concluding a development session.

---

## Validate New Functionality

Every newly implemented feature should be tested to confirm that it performs according to the documented requirements.

Validation should verify that:

- The feature behaves as intended.
- The complete workflow functions correctly.
- Expected outputs are produced.
- User interactions behave consistently.
- Business rules are correctly enforced.

Implementation should match the behaviour defined in `requirements.md`.

---

## Validate Existing Functionality

After introducing changes, verify that previously completed functionality continues to operate correctly.

Pay particular attention to features that interact with the modified implementation.

No completed feature should be unintentionally broken as a result of new development.

---

## Validate Business Workflows

Business workflows should be tested from beginning to end rather than validating only isolated components.

Where applicable, verify complete workflows such as:

- Customer booking requests.
- Manager booking review.
- Booking confirmation.
- Booking cancellation.
- Manual booking creation.
- Booking history transitions.
- Notification delivery.

Each workflow should behave according to the documented business requirements.

---

## Validate User Input

Every user input should be validated using the agreed business rules.

Validation should include both valid and invalid input scenarios.

Where applicable, verify:

- Required fields.
- Accepted input formats.
- Boundary values.
- Invalid data.
- Empty submissions.
- Unexpected user behaviour.

Input validation should prevent invalid data from entering the system while providing clear feedback to the user.

---

## Validate Edge Cases

Implementation should be tested against reasonable edge cases that are expected within normal business operation.

Examples include:

- Invalid booking dates.
- Past booking requests.
- Incorrect mobile numbers.
- Invalid email addresses.
- Missing required information.
- Empty service selections.
- Duplicate form submissions.
- Invalid manager actions.

Edge case handling should produce predictable and controlled behaviour.

---

## Validate User Interface

After implementing any visual changes, verify that:

- Layout remains consistent.
- Navigation functions correctly.
- Forms behave correctly.
- Buttons perform their intended actions.
- Error messages display correctly.
- Success messages display correctly.
- Responsive layouts remain functional across supported screen sizes.

Visual consistency should be maintained throughout the website.

---

## Validate Security Measures

Whenever functionality affects authentication, authorization, user input, or data processing, verify that appropriate security measures remain in place.

Where applicable, validate:

- Input sanitization.
- Server-side validation.
- Authentication.
- Authorization.
- CSRF protection.
- Secure handling of sensitive information.

Security should never be weakened to simplify implementation.

---

## Validate Data Integrity

Whenever data is created, modified, or removed, verify that:

- Correct data is stored.
- Existing records remain intact.
- Relationships remain consistent.
- Duplicate or invalid records are not introduced.

Business data should remain accurate throughout the system.

---

## Resolve Validation Failures

If validation identifies defects or unexpected behaviour, resolve the issue before considering the implementation complete.

Temporary workarounds should not replace proper solutions unless explicitly approved by the project owner.

If resolution is not currently possible, the issue should be documented in `project_concerns.md`.

---

## Validation Before Phase Completion

A development phase should not be considered ready for review until all functionality implemented within that phase has been validated.

Validation should confirm that:

- Objectives have been achieved.
- Deliverables have been implemented.
- Completion criteria have been satisfied.
- No known critical defects remain within the implemented functionality.

Only after successful validation should a phase be presented for project review.

---

## Validation Before Ending a Development Session

Before concluding any development session, confirm that:

- Newly implemented features operate correctly.
- Existing functionality continues to operate.
- Business rules have been preserved.
- User interface consistency has been maintained.
- No obvious regressions have been introduced.
- Any unresolved issues have been documented.

Development should never conclude with known defects left undocumented.

---

## Validation Standard

Every implementation should leave the project in a stable, functional, and maintainable state.

The objective of validation is not merely to identify defects, but to ensure that each completed development session moves the project closer to a production-ready website without compromising the quality or reliability of existing functionality.

10. # Documentation Maintenance

Project documentation is an integral part of the HICKS Website and should be maintained throughout the entire development lifecycle.

The purpose of the project documentation is to ensure that every development session begins with an accurate understanding of the project's current state, business requirements, development roadmap, and outstanding concerns.

Documentation should always reflect the approved state of the project.

---

## Maintain Documentation Accuracy

Project documentation should remain synchronized with the current state of development.

Whenever approved changes affect the project, the relevant documentation should be updated so that future development sessions are based upon accurate and current information.

Outdated or contradictory documentation should not remain within the project.

---

## Maintain Clear Responsibilities

Each project document serves a specific purpose and should only contain information relevant to that purpose.

The responsibilities of each document are:

### instructions.md

Defines:

- Development standards.
- Engineering rules.
- Coding expectations.
- Documentation standards.
- Development workflow.
- Project-wide implementation rules.

This document defines **how development should be performed**.

---

### requirements.md

Defines:

- Functional requirements.
- Non-functional requirements.
- Business workflows.
- System behaviour.
- Business rules.
- User interactions.
- Feature specifications.

This document defines **what the system must do**.

---

### progress.md

Defines:

- Development phases.
- Phase objectives.
- Phase deliverables.
- Phase completion criteria.
- Current project status.

This document defines **the project's development roadmap**.

---

### project_concerns.md

Records:

- Unresolved implementation questions.
- Missing client information.
- Pending business decisions.
- Development blockers.
- Approved assumptions awaiting confirmation.
- Other temporary project concerns.

This document tracks **issues that require future attention**.

---

### hicks_research_report.md

Contains:

- Verified business information.
- Branch information.
- Service information.
- Contact information.
- Business assets.
- Client-provided information.
- Approved research relevant to the project.

This document serves as **the project's business reference**.

---

## Update Documentation Only When Necessary

Documentation should only be modified when approved project changes require it.

Avoid unnecessary wording changes, formatting changes, or restructuring that does not improve accuracy or reflect an approved project decision.

The objective is to maintain stable documentation throughout development.

---

## Preserve Consistency Between Documents

Project documents should support one another without contradiction.

Whenever documentation is updated, verify that related documents remain consistent.

For example:

- New business requirements should be reflected in `requirements.md`.
- Phase changes should be reflected in `progress.md`.
- New implementation concerns should be recorded in `project_concerns.md`.

Documentation should never provide conflicting guidance regarding the same feature or workflow.

---

## Do Not Modify Approved Requirements

Approved requirements represent agreed business decisions.

The engineer should not modify:

- Business workflows.
- Functional requirements.
- System behaviour.
- Project scope.
- Development phases.

unless explicitly instructed by the project owner.

If an implementation issue suggests that a documented requirement should change, record the concern rather than modifying the documentation independently.

---

## Record New Project Concerns

Whenever new uncertainties, missing information, implementation blockers, or client decisions arise during development, record them in `project_concerns.md`.

Do not resolve missing information by making assumptions.

Project concerns should remain visible until they have been addressed or resolved.

---

## Preserve Project History

Documentation should accurately reflect the evolution of the project without rewriting completed work.

Completed phases, approved requirements, and documented business decisions should remain preserved unless they have been intentionally superseded by newer approved decisions.

Project history should remain understandable throughout future development.

---

## Review Documentation Before Submission

Before concluding a development session, verify that:

- Documentation remains accurate.
- Phase status reflects current progress.
- No contradictions exist between project documents.
- Newly discovered concerns have been recorded.
- Documentation changes correspond only to approved project decisions.

Documentation should be left in a state that allows the next development session to begin without requiring clarification.

---

## Documentation Standard

Project documentation should remain concise, organized, accurate, and directly aligned with the approved scope of the HICKS Website.

Every document should have a clearly defined responsibility, and together they should provide a complete and reliable reference for both current and future development without unnecessary duplication or ambiguity.

11. # Session Completion Report

At the conclusion of every development session, the engineer should provide a concise report summarizing the work completed during that session.

The purpose of the report is to provide the project owner with a clear understanding of what was accomplished, what changed within the project, what remains outstanding, and what should be addressed next.

Every report should accurately reflect the work performed during the current development session only.

---

## Report Structure

The completion report should include the following sections.

---

### 1. Summary

Provide a brief overview of the work completed during the session.

The summary should describe:

- The primary objective of the session.
- The functionality implemented.
- The overall outcome.

---

### 2. Objectives Completed

List the objectives that were successfully completed during the session.

Only include work that has been fully implemented and validated.

Do not list partially completed objectives as completed.

---

### 3. Files Created

List every new file created during the session.

For each file, briefly describe its purpose.

---

### 4. Files Modified

List every file modified during the session.

Briefly explain:

- What was changed.
- Why the modification was necessary.

---

### 5. Database Changes

If database modifications were made, summarize:

- New tables.
- Modified tables.
- New columns.
- Removed columns.
- Relationships.
- Indexes.
- Migrations.

If no database changes were made, explicitly state that none were required.

---

### 6. Validation Performed

Summarize the validation completed during the session.

Include any relevant verification such as:

- Feature testing.
- Workflow testing.
- Input validation.
- Edge case validation.
- Responsive interface verification.
- Regression testing.

The report should demonstrate that reasonable validation was performed before concluding the session.

---

### 7. Known Issues

List any defects, limitations, incomplete implementations, or unresolved technical concerns identified during development.

Each issue should include:

- A brief description.
- Its current impact on the project.
- Whether it blocks further development.

Issues requiring future attention should also be recorded in `project_concerns.md` where appropriate.

---

### 8. Documentation Updates

Summarize any documentation updated during the session.

Examples include:

- `progress.md`
- `requirements.md`
- `project_concerns.md`
- Other approved project documentation

If documentation was not modified, explicitly state that no updates were required.

---

### 9. Next Recommended Task

Recommend the logical next development task based on the current project roadmap.

The recommendation should align with the active development phase defined in `progress.md`.

Future work should not extend beyond the approved project scope.

---

### 10. Session Status

Conclude the report with a brief statement indicating the overall status of the session.

Examples include:

- Development completed successfully.
- Development completed with minor outstanding issues.
- Development paused pending clarification.
- Development blocked by unresolved project concerns.

The session status should accurately reflect the condition of the project at the end of the development session.

---

## Reporting Principles

Every completion report should be:

- Accurate.
- Concise.
- Objective.
- Transparent.
- Limited to work completed during the current session.

The report should never exaggerate progress, omit significant implementation issues, or claim completion of work that has not been fully implemented and validated.

---

## Purpose

The Session Completion Report serves as the official record of each development session.

It provides continuity between development sessions, allows the project owner to monitor progress efficiently, and ensures that future work begins with a clear understanding of the current state of the project.

Every development session should conclude with a completion report, regardless of the amount of work performed.