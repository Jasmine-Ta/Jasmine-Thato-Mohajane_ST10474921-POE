# Changelog

All systemic structural enhancements, styling additions, layout configurations, and technical optimizations across the **Sunrise Acres Farm** web application are detailed in this historical tracker.

26-10-17

Added
- *Unified Global Stylesheet (`style.css`):* Consolidated all styling mechanics across 5 new sub-pages (`About_us.html`, `Products.html`, `order_delivery.html`, `gallery_reviews.html`, `contact_us.html`) into a single file cache.

- *Dynamic Product Grid:* Programmed a fluid auto-fitting display layout (`.products-grid`) to gracefully align agricultural inventory product items.
- *Form UI System (`.form-container`):* Developed clean component layouts for order intakes and message vectors using explicit focus-glow visual signals.
- *Aspect-Ratio Photo Galleries:* Implemented structural masonry tracking blocks (`.gallery-grid`) with smooth zoom transitions (`transform: scale(1.05)`) when hovered over.
- *Testimonial Engine:*Scaled clear customer feedback quote arrays (`.reviews-flex`) wrapped inside left-accented brand border banners.

- *New Dynamic Pages*:
  - `enquiry.html`: An interactive client inquiry page hosting custom-tailored input fields.

Client-Side JavaScript Modules**:
  - `javascript/catalogue.js`: Script engineered to handle organic inventory filtering, modal displays, and categorization path paths.
  - `javascript/contact_us.js`: Houses interactive handlers for quick-touch communication triggers and basic workflow routing.
  - `javascript/enquiry.js`: Powers client-side form validation, regex verification for text inputs, and dynamic submission feedback.
  - `javascript/delivery.js`: Logic script that dynamically calculates delivery fees based on selected dispatch options, toggles collection/delivery forms, and establishes date constraints.
  - `javascript/map.js`: Processes simulated coordinates to render interactive navigation or route assistance templates.

   *SEO & Crawling System Files*:
  - `robots.txt`: Added directory definitions, crawl delay guidelines, and configuration permissions for major search engine spiders.
  - `sitemap.xml`: Formatted XML site tree detailing document priorities, last-modified dates, and absolute paths for enhanced indexing across all seven site nodes.

  - Added responsive checkpoint mock-up references: `Desktop.jpg`, `Tablet.jpg`, and `Mobile.jpg`.

-*ChangeLog:* 
Added the changelog.md file in order to update any changes made regarding the css file and the javascript.
- Consolidated JavaScript features in `javascript/main.js`.
- Responsive mobile navigation with an accessible expanded state.
- Interactive Leaflet map with approximate Pretoria and Lanseria area markers.
- Product search and category filtering.
- Order form validation, delivery-address toggle, and date restriction.
- Contact form browser validation.
- Gallery lightbox with keyboard support and Escape-to-close behavior.
- FAQ accordion with accessible expanded states.
- Automatic copyright year update.
- SEO title, description, author and robots metadata in the homepage.
- Responsive styling for product cards, forms, gallery, map and FAQ sections.
- `robots.txt` to permit search-engine crawling of the public website.

Changed
- `index.html` (Refactoring)**: Completely overhauled the basic Part 1 structure into an optimized, modern landing deck with links to the new dynamic ecosystem, optimized hero banners, and semantic header/footer fragments.
- `Css/style.css` (Unified Style System)**: Centrally refactored the global layout file to handle responsive rules using CSS Grid and Flexbox modules. Configured fluid container typography, custom typography variables, and smooth transition states for active elements across phone, tablet, and desktop breakpoints.
- *Navigation Multi-Mapping:* Integrated individual active navigation highlights (`class="active"`) pointing directly to active folder destinations on each individual sub-page.
- *Eliminated Separator Lines:* Removed all legacy unstyled structural horizontal rule lines (`<hr>`) to let layout sections breathe naturally with standard CSS container margins.
- Replaced invalid Google Maps script/iframe placeholder with Leaflet and OpenStreetMap.
- Standardized local image paths to use forward slashes.
- Moved homepage styling into the external stylesheet.
- Improved semantic HTML, alt text, focus styles and responsive breakpoints.
- Used approximate city-area map markers instead of representing them as verified farm addresses.
- Corrected the navigation menu state and mobile display behavior.
- Added guards so page-specific JavaScript only runs when its matching elements exist.
- Added browser-native validation and clearer feedback for order and contact forms.
- Fixed product filtering so hidden products are excluded from the visible result count.

Fixed
- *Typographical Normalization:** Squashed all instances of misspelled tracking terms (such as `"Spinanch"`, `"Gautang"`  and `"Wgite"`) across the site's text layers.
- **Overflow & Clipping Layout Flaws:** Applied modern structural block tags (`.card-content`, `.product-info`) to enforce padding margins, completely stopping text string leaks on smaller screens.

Security & Optimization
- Form field sanitsation protocols running via JavaScript execution blocks to prevent empty payloads.
- Local Git workspace configurations mapped out accurately; tree state tracks all objects and blob indices cleanly in the branch metadata.

-

