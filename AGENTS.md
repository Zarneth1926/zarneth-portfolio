# AGENTS.md — Zarneth Portfolio

## 1. Project Identity

This repository is the professional developer portfolio of **Zarneth Layoso**.

The project started from the BrewedOps portfolio template and uses that project only as a structural and technical foundation.

The final website must develop its own identity.

Do not attempt to reproduce Kenneth Villar's personal branding, copywriting, color system, imagery, project content, or visual personality.

The goal is to create a portfolio that feels unmistakably like **Zarneth's developer portfolio** while preserving useful architecture and interaction patterns from the original template.

---

## 2. Mandatory Instructions Before Any Work

Before planning, modifying, generating, refactoring, or deleting code:

1. Read this `AGENTS.md` completely.
2. Read all relevant skill or instruction files available for the task.
3. Inspect the existing implementation before proposing changes.
4. Understand the current component, data, routing, styling, responsive, animation, and accessibility architecture.
5. Prefer extending or adapting existing systems instead of rebuilding working functionality.
6. Do not make unrelated changes.
7. Do not modify files simply to make the code look different.
8. Preserve working behavior unless the task explicitly requires changing it.
9. Do not guess how a system works when the implementation can be inspected.
10. Do not begin substantial implementation before understanding the affected files.

For every substantial task:

- inspect first
- explain the implementation plan
- identify affected files
- make the smallest coherent set of changes
- run validation afterward
- summarize exactly what changed

---

## 3. Project Purpose

This portfolio is intended to support Zarneth's future applications for roles such as:

- Front-End Developer
- Junior Full-Stack Developer
- Web Developer
- Software Developer

The portfolio should demonstrate actual development ability rather than simply state that Zarneth is a developer.

Prioritize:

- real projects
- technical decisions
- problem solving
- UI/UX thinking
- responsiveness
- maintainable code
- practical software development
- continuous learning
- clear communication of project decisions
- good engineering practices

Avoid making the portfolio look like a generic student résumé website.

The website itself should serve as evidence of Zarneth's ability to build polished web applications.

---

## 4. Current Technology Stack

Preserve the existing technology stack unless there is a clear technical reason to change it.

Current foundation:

- React 19
- TypeScript
- Vite 6
- React Router
- Three.js
- GSAP
- Lenis
- plain CSS
- CSS custom properties
- Phosphor Icons
- Poppins

Do not migrate the project to Next.js, another framework, or another styling system unless explicitly requested.

Do not introduce Tailwind CSS merely for convenience.

Do not replace the existing animation system simply because another animation library is available.

Avoid unnecessary dependencies.

Before installing a new dependency, determine whether the existing codebase already provides the required capability.

---

## 5. Original Template Relationship

The BrewedOps template provides useful systems that should generally be preserved:

- desktop profile rail
- route-based navigation
- bento-style home organization
- responsive phone experience
- animated contour/background architecture
- Three.js functionality
- GSAP motion
- Lenis scrolling
- responsive behavior
- accessibility considerations
- reduced-motion handling
- route transitions
- theme support

These systems may be restyled, adapted, or repurposed.

Do not blindly remove them.

However, template-specific content and branding should eventually be replaced.

The final site should not look like a simple recolored copy of the original template.

---

## 6. Licensing

The original project includes licensing requirements.

Do not delete or alter the repository `LICENSE` file unless explicitly instructed after confirming the applicable license requirements.

Preserve required attribution and legal notices from the original project.

Do not remove required notices merely to make the repository appear fully original.

The current template is being used for Zarneth's own personal portfolio.

Never change licensing-related files without first reviewing the existing license.

---

# DESIGN SYSTEM

## 7. Visual Direction

The portfolio should follow a:

**Modern Editorial Developer Portfolio**

with a restrained monochrome visual identity.

Primary visual palette:

- white
- off-white
- light gray
- medium gray
- graphite
- black

Suggested design direction:

- Background: `#F7F7F5`
- Primary surface: `#FFFFFF`
- Soft surface: `#EFEFED`
- Border: `#DEDEDA`
- Primary text: `#101010`
- Secondary text: `#707070`
- Dark surface: `#151515`

These exact values may evolve during implementation.

Do not treat these initial values as permanent if accessibility, contrast, or visual hierarchy requires refinement.

---

## 8. Accent Color Policy

The design should remain primarily monochrome.

Accent colors may be used sparingly for:

- active navigation
- availability status
- small status indicators
- focus states
- important project status
- subtle interactive feedback
- selected highlights

Do not allow an accent color to dominate the visual identity.

Avoid:

- large colorful backgrounds
- rainbow gradients
- excessive neon
- glowing interfaces
- cyberpunk styling
- stereotypical hacker aesthetics

The visual identity should remain clean and professional.

---

## 9. Desired Visual Personality

The interface should feel:

- clean
- intentional
- premium
- calm
- modern
- professional
- technical
- structured
- minimal
- highly readable
- confident without being excessive

Prefer:

- strong typography
- generous whitespace
- controlled spacing
- subtle borders
- restrained shadows
- clear hierarchy
- consistent card systems
- thoughtful micro-interactions
- meaningful imagery

Avoid:

- excessive gradients
- excessive glassmorphism
- glowing cards
- clutter
- unnecessary decorative elements
- animation on every element
- template-like developer clichés
- fake terminal aesthetics used only as decoration
- arbitrary skill percentage bars
- unnecessary badges everywhere

Every visible element should have a purpose.

---

## 10. Typography

Typography should play an important role in the final visual identity.

The final font system may differ from the template's existing Poppins font.

Preferred direction:

- modern sans-serif
- editorial feel
- excellent readability
- strong display headings
- clean body copy
- good number and code rendering
- professional appearance

Potential font directions include:

- Geist
- Inter
- Manrope
- DM Sans

Do not change typography without checking its impact across:

- desktop
- tablet
- phone
- navigation
- hero headings
- cards
- project descriptions
- buttons
- labels

Avoid using too many font families.

A strong one-family or two-family system is preferred.

---

# INFORMATION ARCHITECTURE

## 11. Intended Navigation

The original navigation is expected to evolve toward:

- Home
- Projects
- Tech Stack
- Showcase or Lab
- Certifications
- About
- Contact

Expected mapping from the original template:

- Home → Home
- Projects → Projects
- Services → Tech Stack
- Showcase → Showcase or Lab
- Testimonials → Certifications
- About → About
- FAQs / Contact → Contact

Do not rename or restructure routes without checking all related systems.

Always inspect:

- desktop Rail
- mobile TabBar
- QuickMenu
- React Router configuration
- route transitions
- cross-page links
- active states
- accessibility labels
- page titles
- mobile navigation behavior

Do not update desktop navigation while leaving mobile navigation inconsistent.

---

# HOME PAGE

## 12. Home Page Goal

The homepage should quickly answer:

1. Who is Zarneth?
2. What does he build?
3. What technologies does he use?
4. What is he currently working on?
5. What is his strongest project?
6. Where can recruiters explore further?

The homepage should remain concise.

Do not attempt to place the entire résumé on the home screen.

Use the bento layout to provide a useful overview and clear paths toward deeper sections.

Priority should generally be:

- identity
- strongest project
- current focus
- technical stack
- developer journey
- contact

---

## 13. Hero Direction

The hero should communicate a clear developer identity.

Possible messaging direction:

**I build useful digital products for the web.**

Supporting copy should communicate that Zarneth is an Information Technology student and aspiring full-stack developer focused on practical web applications and digital systems.

Avoid exaggerated claims such as:

- expert software engineer
- senior developer
- industry-leading developer
- master programmer
- highly experienced engineer

Keep all statements accurate to Zarneth's actual experience level.

The hero should communicate confidence without overstating experience.

---

# PROJECTS

## 14. Projects Are the Main Proof of Skill

Projects should receive more emphasis than certificates, logos, or decorative technology lists.

Primary flagship project:

### GenHub

Full project name:

**GenHub — Web-Based Barangay Information and Concern Management System**

GenHub should eventually demonstrate areas such as:

- real-world problem being solved
- target users
- resident experience
- admin workflows
- document and service requests
- authentication
- resident verification
- notifications
- deployment
- responsive design
- frontend architecture
- backend architecture
- database integration
- security considerations
- UI/UX decisions
- technical challenges
- lessons learned

Current known stack includes:

- React
- Node.js
- Express
- MySQL

Only describe functionality that actually exists.

Do not fabricate project features.

Clearly distinguish:

- implemented
- in progress
- planned

---

## 15. Other Projects

Potential project groups include:

- GenHub
- Animal Bite Tracking System
- Anniversary Website
- Portfolio V2
- academic projects
- frontend experiments
- future full-stack applications

Do not treat every coding exercise as a featured project.

Use the main Projects section for substantial projects.

Use Showcase or Lab for:

- smaller builds
- experiments
- creative sites
- frontend concepts
- learning projects

Project quality is more important than project quantity.

---

# SHOWCASE / LAB

## 16. Showcase Purpose

The existing Three.js/project carousel can be retained and repurposed.

Instead of reproducing the original template's business funnels and marketing websites, use it for Zarneth's own development work.

Possible content:

- UI experiments
- frontend builds
- landing pages
- creative websites
- personal builds
- small web applications
- interactive experiments

The Anniversary Website is a possible candidate for this area.

Preserve the 3D interaction if it remains:

- useful
- performant
- responsive
- understandable
- accessible enough for the context

Do not keep Three.js solely because it looks technically impressive.

User experience takes priority over visual complexity.

---

# TECH STACK

## 17. Tech Stack Presentation

Do not use arbitrary proficiency percentages.

Avoid patterns such as:

- HTML 95%
- CSS 90%
- React 85%

Preferred organization:

### Frontend

- HTML
- CSS
- JavaScript
- TypeScript
- React
- Tailwind CSS where actually used

### Backend

- Node.js
- Express

### Database

- MySQL

### Tools

- Git
- GitHub
- VS Code
- Vite
- Thunder Client
- MySQL Workbench
- other tools actually used

Only display technologies Zarneth has genuinely worked with.

Do not add trendy tools solely to make the portfolio appear more advanced.

---

# CERTIFICATIONS

## 18. Certification Content

Current certification examples include:

- Cisco — Getting Started with Cisco Packet Tracer
- Cisco — Exploring Networking with Cisco Packet Tracer

Do not invent:

- certificates
- credentials
- completion dates
- scores
- credential IDs
- verification URLs

Certificates are supporting evidence.

Projects and actual development work should remain the main focus.

---

# ABOUT PAGE

## 19. About Content

The About section may communicate:

- Information Technology education
- interest in web development
- interest in frontend development
- interest in backend development
- problem-solving mindset
- developer learning journey
- current goals
- approach to building software
- desire to grow into full-stack development

Avoid writing an excessively long autobiography.

The About section should feel professional but human.

It should help a recruiter understand Zarneth beyond a technology list.

---

# RESPONSIVE DESIGN

## 20. Mobile Is a First-Class Experience

The portfolio must work exceptionally well on phones.

The original template intentionally includes a separate phone-oriented experience.

Preserve or improve this philosophy.

Every significant UI change should be evaluated around these widths:

- 320px
- 375px
- 390px
- 430px
- 768px
- 1100px
- 1440px and above

The existing template changes significantly around the 1100px range.

Inspect existing responsive behavior before altering breakpoints.

Never assume desktop CSS automatically works correctly on mobile.

---

## 21. Mobile UX Requirements

Ensure:

- comfortable tap targets
- no horizontal page overflow
- readable typography
- no clipped navigation
- no overlapping floating controls
- cards remain usable
- project screenshots remain understandable
- modals and sheets fit small screens
- animations do not interfere with scrolling
- important actions work by tap
- text remains readable without zooming
- fixed and floating UI does not cover content

Do not rely on hover for important functionality.

Hover may enhance desktop experiences but should never be required to access essential information.

---

# ANIMATION

## 22. Motion Philosophy

Animations should support hierarchy, feedback, and interaction.

Good uses include:

- page transitions
- route changes
- navigation state
- subtle card movement
- project previews
- controlled reveal animations
- carousel interaction
- small state transitions

Avoid:

- constant bouncing
- excessive parallax
- animation on every element
- distracting cursor effects
- unnecessary particles
- very long intro sequences
- motion that delays access to content
- excessive scale effects

The website should still feel polished when animation is disabled.

---

## 23. Reduced Motion

Respect:

`prefers-reduced-motion`

Preserve the template's existing reduced-motion support.

Any new animation must have a reasonable reduced-motion fallback.

Do not remove reduced-motion logic unless replacing it with an equivalent or better implementation.

---

# PERFORMANCE

## 24. Performance Is Part of the Design

The animated canvas, Three.js, GSAP, images, and other effects can become expensive.

Before introducing visual effects, consider:

- CPU usage
- GPU usage
- mobile performance
- initial bundle size
- image size
- unnecessary rerenders
- animation loops
- layout shifts
- route loading behavior

Preserve the template's existing performance safeguards where possible.

Do not add large `backdrop-filter` effects over continuously animated canvas layers without considering performance impact.

Visual polish must not make the portfolio slow or uncomfortable to use.

---

## 25. Images

Prefer optimized formats such as:

- WebP
- AVIF where appropriate

Use meaningful `alt` text.

Do not ship unnecessarily large raw screenshots when optimized versions are possible.

Project screenshots should prioritize readability rather than decoration.

Use consistent framing and cropping for project imagery.

Avoid stretching images.

Preserve aspect ratio unless an intentional crop is required.

---

# ACCESSIBILITY

## 26. Accessibility Requirements

Maintain or improve:

- semantic HTML
- keyboard navigation
- visible focus states
- descriptive labels
- sufficient contrast
- meaningful alt text
- proper button semantics
- proper link semantics
- reduced-motion support
- understandable navigation states

Do not replace semantic controls with clickable `<div>` elements.

Do not remove accessibility attributes without understanding why they exist.

Interactive elements must remain usable by keyboard where appropriate.

---

# CODE QUALITY

## 27. TypeScript

Keep TypeScript strict and useful.

Avoid unnecessary `any`.

Prefer explicit data structures for:

- projects
- profile data
- certifications
- tech stack entries
- showcase items
- contact information
- project metadata

Keep content-driven data separate from presentation where practical.

Do not weaken types simply to silence errors.

Fix the actual typing issue where reasonable.

---

## 28. React

Prefer:

- small focused components
- clear component responsibility
- reusable patterns where repetition exists
- predictable props
- data-driven rendering
- clear state ownership

Avoid:

- giant components
- unnecessary global state
- premature abstraction
- deeply nested conditional rendering
- duplicate logic
- duplicated desktop/mobile business logic when shared logic is possible

Do not over-engineer simple UI.

Use abstractions when they improve clarity or remove meaningful duplication.

---

## 29. CSS

The project intentionally uses plain CSS and CSS custom properties.

Continue using the existing styling architecture unless explicitly instructed otherwise.

Prefer:

- reusable design tokens
- existing naming conventions
- logical component styles
- consistent spacing
- centralized color variables
- responsive rules associated with the relevant system

Avoid:

- random hardcoded colors throughout components
- unnecessary `!important`
- repeated magic numbers without reason
- global selectors that unintentionally affect unrelated components
- CSS rewrites that break existing animation systems

Use design tokens whenever practical.

---

# CONTENT SAFETY

## 30. Never Fabricate Portfolio Information

Never invent:

- job experience
- internships
- clients
- testimonials
- certifications
- awards
- production users
- project statistics
- repository counts
- employment history
- technical achievements
- project metrics
- credentials

If content is missing:

- preserve an obvious development placeholder
- leave the content empty when appropriate
- or ask for the missing information

Accuracy is more important than making the portfolio appear impressive.

---

# CHANGE MANAGEMENT

## 31. Make Changes Incrementally

Large redesigns should happen in controlled phases.

Preferred sequence:

### Phase 1 — Identity and Content

Replace placeholders with Zarneth's real information.

### Phase 2 — Information Architecture

Update navigation, page roles, and section purposes.

### Phase 3 — Visual Design System

Implement Zarneth's monochrome identity, typography, spacing, borders, and card styling.

### Phase 4 — Projects and Case Studies

Improve project presentation, screenshots, descriptions, and technical storytelling.

### Phase 5 — Animation and Interaction

Refine motion, hover states, transitions, Three.js behavior, and micro-interactions.

### Phase 6 — Quality Assurance

Improve:

- accessibility
- responsiveness
- performance
- SEO
- metadata
- deployment readiness

Do not redesign the entire project in one uncontrolled task.

---

## 32. Preserve Working Features

Before replacing an existing system, determine:

- what it currently does
- where it is used
- which components depend on it
- mobile implications
- animation implications
- accessibility implications
- route implications
- styling implications

Do not delete functionality simply because it is difficult to understand.

Inspect first.

If replacing a system, preserve required behavior or explicitly explain what is changing.

---

# VALIDATION

## 33. Required Checks

After meaningful code changes, run the relevant checks:

    npm run typecheck
    npm run lint
    npm run build

Use:

    npm run dev

for visual verification.

Do not report a task as complete while known errors remain.

If a validation command cannot be executed, clearly state:

- which command was not run
- why it could not be run
- what remains to be verified

---

## 34. Regression Checks

After meaningful UI changes verify:

- desktop navigation
- mobile navigation
- light theme
- dark theme
- route transitions
- scroll behavior
- reduced-motion mode
- project cards
- contact links
- responsive layout
- keyboard accessibility
- focus states
- Three.js/showcase behavior when relevant

Do not assume that a desktop screenshot proves mobile behavior works.

---

# GIT WORKFLOW

## 35. Repository Remotes

Expected repository configuration:

    origin
    → Zarneth1926/zarneth-portfolio

    upstream
    → brewed-ops/portfolio-template

`origin` is Zarneth's own portfolio repository.

`upstream` is the original BrewedOps template repository.

Never push Zarneth's portfolio changes to `upstream`.

Do not change remotes unless explicitly requested.

---

## 36. Branches

Primary stable branch:

    main

Current development branch:

    portfolio-v2

Make portfolio development changes on `portfolio-v2` unless explicitly instructed otherwise.

Do not perform unnecessary force pushes.

Do not rewrite Git history unless explicitly required and the implications are understood.

Keep `main` stable.

---

## 37. Commit Quality

Use clear and descriptive commit messages.

Good examples:

    Customize portfolio profile content

    Replace services with tech stack section

    Add GenHub featured project

    Refine monochrome design tokens

    Improve mobile project layout

    Add portfolio accessibility improvements

Avoid vague commit messages such as:

    update

    changes

    fix stuff

    final

    final final

    done

Commit messages should explain the intent of the change.

---

# WORKING WITH CODEX / AI

## 38. AI Behavior

When receiving a development task:

1. Read `AGENTS.md`.
2. Read all relevant available skills or project instructions.
3. Inspect the affected files.
4. Understand the current implementation.
5. State the implementation plan.
6. Identify likely affected files.
7. Make the smallest coherent set of changes.
8. Preserve unrelated behavior.
9. Run relevant validation.
10. Summarize exactly what changed.
11. Report any unresolved issues honestly.

Do not blindly follow a prompt when it conflicts with existing architecture or these project rules.

If a requested change could cause significant regressions, explain the concern before making destructive modifications.

Do not invent implementation details that can be verified by reading the code.

---

## 39. No Unrequested Destructive Refactors

Do not perform any of the following unless the task explicitly requires it and the impact has been reviewed:

- delete major systems
- remove responsive architecture
- remove Three.js
- remove GSAP
- remove Lenis
- replace routing
- migrate frameworks
- introduce a new styling framework
- replace the CSS architecture
- rename large directory structures
- remove theme support
- remove reduced-motion support
- remove mobile-specific architecture
- replace working animation systems
- rewrite the application from scratch

Prefer targeted modification over wholesale replacement.

---

# PROJECT CONTENT DIRECTION

## 40. Current Portfolio Identity

Primary identity:

**Zarneth Layoso**

Current professional direction:

**Information Technology Student / Aspiring Full-Stack Developer**

The portfolio should communicate growth toward professional software and web development roles.

Do not overstate seniority.

---

## 41. Featured Project Priority

GenHub should generally receive the strongest project emphasis because it demonstrates a broader range of development skills.

GenHub may be presented as:

**GenHub — Web-Based Barangay Information and Concern Management System**

Relevant technology examples:

- React
- Node.js
- Express
- MySQL

Relevant areas may include:

- authentication
- residents
- administration
- document requests
- verification
- notifications
- responsive UI
- deployment
- frontend/backend integration

Only include functionality verified to exist.

---

## 42. Portfolio V2 Is Also a Project

This portfolio should eventually be presented as part of Zarneth's development journey.

It demonstrates experience with:

- React
- TypeScript
- Vite
- component architecture
- responsive design
- UI/UX
- animation
- Three.js
- accessibility
- performance
- Git
- GitHub
- deployment

Do not describe features as completed until they actually exist.

---

# FINAL PRODUCT STANDARD

## 43. Final Product Goal

The final portfolio should communicate:

**Zarneth is a developing software professional who can turn ideas and real-world problems into usable digital products.**

It should feel like a deliberately designed product, not simply a modified template.

The original template's architecture may remain visible in how the site is organized, but the finished portfolio must have its own:

- identity
- content
- project story
- typography
- visual system
- interaction style
- developer narrative
- imagery
- information architecture

The final result should remain useful for future internship, junior developer, web developer, frontend, and full-stack applications.

---

## 44. Decision Standard

For every design or engineering decision, ask:

**Does this help demonstrate Zarneth's ability to design, build, solve problems, and think like a developer?**

If the answer is no, reconsider whether the element or feature belongs in the portfolio.

Prefer substance over decoration.

Prefer clarity over complexity.

Prefer working software over visual gimmicks.

Prefer honest representation over exaggerated presentation.