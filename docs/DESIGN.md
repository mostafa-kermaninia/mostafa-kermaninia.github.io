# Design system

The portfolio uses an editorial monochrome direction: large, regular-weight typography, a grayscale original portrait, generous spacing, quiet rules, and contrasting project artwork.

| Token | Value | Use |
|---|---|---|
| Paper | `#f8f8f8` | Main background |
| Ink | `#222222` | Body text, buttons and primary identity |
| Muted | `#626262` | Secondary body text |
| Rule | `#dedede` | Dividers |
| Section | `#eeeeec` | Experience and stack sections |
| Dark | `#191919` | Contact footer |
| Typeface | Manrope variable | Locally hosted, SIL OFL |

The layout scales from a single-column mobile reading order to paired desktop project panels. Root spacing uses fluid gutters, bounded content width, and explicit image dimensions. Case-study copy has a narrower reading measure and an optional desktop contents list.

Project covers are original CSS illustrations, labeled “Concept illustration.” They are not screenshots or measured product results. The portrait remains the author’s original image, displayed in grayscale through CSS.

Essential content is rendered into HTML. Native links and `details` elements provide navigation and disclosure without JavaScript. The mobile navigation remains visible without JavaScript; enhancement adds a collapsible menu. Filters and clipboard feedback are optional enhancements. Focus indicators, skip navigation, accessible button state, Escape behavior, and reduced-motion handling are included.

Visual inspiration: https://dribbble.com/shots/24978876-Personal-Portfolio-Website-Design
