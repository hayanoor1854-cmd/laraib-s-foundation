# Laraib Amjad Portfolio Foundation

## Goal
Build the single-page portfolio foundation at `/` with the supplied minimal, technical, editorial direction. This step establishes structure and responsive behavior without inventing personal details or over-designing sections.

## Implementation
- Define a semantic light-first color, typography, spacing, border, surface, and technical-grid system in the global styles; include a restrained dark theme using the same roles and no gradients.
- Load Inter plus a clean monospace companion and apply a consistent 1200px, 12-column responsive layout.
- Build a sticky navigation bar with the `LA.` mark, section links, theme toggle, and an accessible mobile menu.
- Add the requested sections in exact order: Hero, About, Skills, Projects, Experience, Education, Services, Contact, Footer.
- Keep section content intentionally skeletal, using neutral labels and placeholders rather than fabricated biography, project, employment, or contact details.
- Add only short transitions for links, buttons, navigation, and theme controls; respect reduced-motion preferences.
- Add route-specific page metadata and retain the existing error and not-found handling.

## Responsive and accessibility checks
- Verify desktop and mobile layouts, menu behavior, theme switching, keyboard focus, section navigation, and absence of horizontal scrolling.
- Confirm the preview builds cleanly and the page remains readable at tablet and laptop widths.
