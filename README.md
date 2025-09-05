# oli.css

A modern no-class framework [early alpha].

oli.css is an accessible no-class CSS framework built with modern CSS. It allows you to create beautiful websites without writing any CSS.

* no classes or data- attributes
  100% HTML only
* highly configurably CSS-API
  ```css
  :root {
    --oli-s-magic: true; /** Make opinionated design decisions based on the markup */
    --oli-s-layout: horizontal; /** Page layout */
    --oli-s-scroll-behavior: smooth; /** Always auto if prefers-reduced-motion is active  */
    --oli-s-font-stack: transitional; /** Based on modernfontstacks.com */
    --oli-s-page-max-width: 80rem; /** Maximum width of the page */
    --oli-s-page-width: 100%; /** Page width */
    --oli-s-page-start-column-width: 16rem; /** Width of the start column */
    …
  }
  ```
* uses modern CSS and cuts the mustard at Cascade Layers