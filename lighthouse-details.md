# Orivion Lighthouse detailed findings

Generated: 2026-08-23T18:03:20.732Z

## Mobile

### Uses ARIA roles only on compatible elements `aria-allowed-role`

Description: Many HTML elements can only be assigned certain ARIA roles. Using ARIA roles where they are not allowed can interfere with the accessibility of the web page. [Learn more about ARIA roles](https://dequeuniversity.com/rules/axe/4.12/aria-allowed-role).

### ARIA input fields have accessible names `aria-input-field-name`

Description: When an input field doesn't have an accessible name, screen readers announce it with a generic name, making it unusable for users who rely on screen readers. [Learn more about input field labels](https://dequeuniversity.com/rules/axe/4.12/aria-input-field-name).

### ARIA `meter` elements have accessible names `aria-meter-name`

Description: When a meter element doesn't have an accessible name, screen readers announce it with a generic name, making it unusable for users who rely on screen readers. [Learn how to name `meter` elements](https://dequeuniversity.com/rules/axe/4.12/aria-meter-name).

### ARIA `progressbar` elements have accessible names `aria-progressbar-name`

Description: When a `progressbar` element doesn't have an accessible name, screen readers announce it with a generic name, making it unusable for users who rely on screen readers. [Learn how to label `progressbar` elements](https://dequeuniversity.com/rules/axe/4.12/aria-progressbar-name).

### Elements with an ARIA `[role]` that require children to contain a specific `[role]` have all required children. `aria-required-children`

Description: Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions. [Learn more about roles and required children elements](https://dequeuniversity.com/rules/axe/4.12/aria-required-children).

### ARIA toggle fields have accessible names `aria-toggle-field-name`

Description: When a toggle field doesn't have an accessible name, screen readers announce it with a generic name, making it unusable for users who rely on screen readers. [Learn more about toggle fields](https://dequeuniversity.com/rules/axe/4.12/aria-toggle-field-name).

### ARIA `tooltip` elements have accessible names `aria-tooltip-name`

Description: When a tooltip element doesn't have an accessible name, screen readers announce it with a generic name, making it unusable for users who rely on screen readers. [Learn how to name `tooltip` elements](https://dequeuniversity.com/rules/axe/4.12/aria-tooltip-name).

### ARIA `treeitem` elements have accessible names `aria-treeitem-name`

Description: When a `treeitem` element doesn't have an accessible name, screen readers announce it with a generic name, making it unusable for users who rely on screen readers. [Learn more about labeling `treeitem` elements](https://dequeuniversity.com/rules/axe/4.12/aria-treeitem-name).

### ARIA IDs are unique `duplicate-id-aria`

Description: The value of an ARIA ID must be unique to prevent other instances from being overlooked by assistive technologies. [Learn how to fix duplicate ARIA IDs](https://dequeuniversity.com/rules/axe/4.12/duplicate-id-aria).

### Custom controls have ARIA roles `custom-controls-roles`

Description: Custom interactive controls have appropriate ARIA roles. [Learn how to add roles to custom controls](https://developer.chrome.com/docs/lighthouse/accessibility/custom-control-roles/).

### Avoids enormous network payloads `total-byte-weight`

Result: Total size was 258 KiB
Description: Large network payloads cost users real money and are highly correlated with long load times. [Learn how to reduce payload sizes](https://developer.chrome.com/docs/lighthouse/performance/total-byte-weight/).
- url=https://orivion.ae/assets/index-Dqd4V1Uq.js | totalBytes=129381
- url=https://orivion.ae/assets/app-Do4fh507.css | totalBytes=24165
- url=https://orivion.ae/assets/space-grotesk-latin-wght-normal-BhU9QXUp.woff2 | totalBytes=22790
- url=https://orivion.ae/assets/instrument-serif-latin-400-italic-DKMiL14s.woff2 | totalBytes=22671
- url=https://orivion.ae/media/orivion-hero-mobile-poster.webp | totalBytes=13412
- url=https://static.cloudflareinsights.com/beacon.min.js/v4513226cdae34746b4dedf0b4dfa099e1781791509496 | totalBytes=11577
- url=https://orivion.ae/ | totalBytes=11473
- url=https://orivion.ae/assets/useStore-DS0LvO1q.js | totalBytes=10074
- url=https://orivion.ae/assets/routes-CSdYE2RP.js | totalBytes=4844
- url=https://orivion.ae/assets/link-ByfVX-v7.js | totalBytes=3762

### Reduce unused JavaScript `unused-javascript`

Result: Est savings of 45 KiB
Description: Reduce unused JavaScript and defer loading scripts until they are required to decrease bytes consumed by network activity. [Learn how to reduce unused JavaScript](https://developer.chrome.com/docs/lighthouse/performance/unused-javascript/).
- url=https://orivion.ae/assets/index-Dqd4V1Uq.js | totalBytes=129078 | wastedBytes=46550

### Use efficient cache lifetimes `cache-insight`

Result: Est savings of 5 KiB
Description: A long cache lifetime can speed up repeat visits to your page. [Learn more about caching](https://developer.chrome.com/docs/performance/insights/cache).
- url=https://static.cloudflareinsights.com/beacon.min.js/v4513226cdae34746b4dedf0b4dfa099e1781791509496 | totalBytes=11577 | wastedBytes=4630.8 | cacheLifetimeMs=86400000

### Network dependency tree `network-dependency-tree-insight`

Description: [Avoid chaining critical requests](https://developer.chrome.com/docs/performance/insights/network-dependency-tree) by reducing the length of chains, reducing the download size of resources, or deferring the download of unnecessary resources to improve page load.

### Render-blocking requests `render-blocking-insight`

Description: Requests are blocking the page's initial render, which may delay LCP. [Deferring or inlining](https://developer.chrome.com/docs/performance/insights/render-blocking) can move these network requests out of the critical path.
- url=https://orivion.ae/assets/app-Do4fh507.css | totalBytes=24165 | wastedMs=150
- url=https://orivion.ae/assets/index-DsN7f0_u.css | totalBytes=834

## Desktop

### Uses ARIA roles only on compatible elements `aria-allowed-role`

Description: Many HTML elements can only be assigned certain ARIA roles. Using ARIA roles where they are not allowed can interfere with the accessibility of the web page. [Learn more about ARIA roles](https://dequeuniversity.com/rules/axe/4.12/aria-allowed-role).

### ARIA input fields have accessible names `aria-input-field-name`

Description: When an input field doesn't have an accessible name, screen readers announce it with a generic name, making it unusable for users who rely on screen readers. [Learn more about input field labels](https://dequeuniversity.com/rules/axe/4.12/aria-input-field-name).

### ARIA `meter` elements have accessible names `aria-meter-name`

Description: When a meter element doesn't have an accessible name, screen readers announce it with a generic name, making it unusable for users who rely on screen readers. [Learn how to name `meter` elements](https://dequeuniversity.com/rules/axe/4.12/aria-meter-name).

### ARIA `progressbar` elements have accessible names `aria-progressbar-name`

Description: When a `progressbar` element doesn't have an accessible name, screen readers announce it with a generic name, making it unusable for users who rely on screen readers. [Learn how to label `progressbar` elements](https://dequeuniversity.com/rules/axe/4.12/aria-progressbar-name).

### Elements with an ARIA `[role]` that require children to contain a specific `[role]` have all required children. `aria-required-children`

Description: Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions. [Learn more about roles and required children elements](https://dequeuniversity.com/rules/axe/4.12/aria-required-children).

### ARIA toggle fields have accessible names `aria-toggle-field-name`

Description: When a toggle field doesn't have an accessible name, screen readers announce it with a generic name, making it unusable for users who rely on screen readers. [Learn more about toggle fields](https://dequeuniversity.com/rules/axe/4.12/aria-toggle-field-name).

### ARIA `tooltip` elements have accessible names `aria-tooltip-name`

Description: When a tooltip element doesn't have an accessible name, screen readers announce it with a generic name, making it unusable for users who rely on screen readers. [Learn how to name `tooltip` elements](https://dequeuniversity.com/rules/axe/4.12/aria-tooltip-name).

### ARIA `treeitem` elements have accessible names `aria-treeitem-name`

Description: When a `treeitem` element doesn't have an accessible name, screen readers announce it with a generic name, making it unusable for users who rely on screen readers. [Learn more about labeling `treeitem` elements](https://dequeuniversity.com/rules/axe/4.12/aria-treeitem-name).

### ARIA IDs are unique `duplicate-id-aria`

Description: The value of an ARIA ID must be unique to prevent other instances from being overlooked by assistive technologies. [Learn how to fix duplicate ARIA IDs](https://dequeuniversity.com/rules/axe/4.12/duplicate-id-aria).

### Custom controls have ARIA roles `custom-controls-roles`

Description: Custom interactive controls have appropriate ARIA roles. [Learn how to add roles to custom controls](https://developer.chrome.com/docs/lighthouse/accessibility/custom-control-roles/).

### Avoids enormous network payloads `total-byte-weight`

Result: Total size was 843 KiB
Description: Large network payloads cost users real money and are highly correlated with long load times. [Learn how to reduce payload sizes](https://developer.chrome.com/docs/lighthouse/performance/total-byte-weight/).
- url=https://orivion.ae/media/orivion-hero-desktop.mp4 | totalBytes=592572
- url=https://orivion.ae/assets/index-Dqd4V1Uq.js | totalBytes=129500
- url=https://orivion.ae/assets/app-Do4fh507.css | totalBytes=24252
- url=https://orivion.ae/assets/space-grotesk-latin-wght-normal-BhU9QXUp.woff2 | totalBytes=22784
- url=https://orivion.ae/assets/instrument-serif-latin-400-italic-DKMiL14s.woff2 | totalBytes=22627
- url=https://orivion.ae/media/orivion-hero-desktop-poster.webp | totalBytes=17342
- url=https://orivion.ae/ | totalBytes=11660
- url=https://static.cloudflareinsights.com/beacon.min.js/v4513226cdae34746b4dedf0b4dfa099e1781791509496 | totalBytes=11577
- url=https://orivion.ae/assets/useStore-DS0LvO1q.js | totalBytes=10344
- url=https://orivion.ae/assets/routes-CSdYE2RP.js | totalBytes=5075

### Reduce unused JavaScript `unused-javascript`

Result: Est savings of 44 KiB
Description: Reduce unused JavaScript and defer loading scripts until they are required to decrease bytes consumed by network activity. [Learn how to reduce unused JavaScript](https://developer.chrome.com/docs/lighthouse/performance/unused-javascript/).
- url=https://orivion.ae/assets/index-Dqd4V1Uq.js | totalBytes=128980 | wastedBytes=45542

### Use efficient cache lifetimes `cache-insight`

Result: Est savings of 5 KiB
Description: A long cache lifetime can speed up repeat visits to your page. [Learn more about caching](https://developer.chrome.com/docs/performance/insights/cache).
- url=https://static.cloudflareinsights.com/beacon.min.js/v4513226cdae34746b4dedf0b4dfa099e1781791509496 | totalBytes=11577 | wastedBytes=4630.8 | cacheLifetimeMs=86400000

### Network dependency tree `network-dependency-tree-insight`

Description: [Avoid chaining critical requests](https://developer.chrome.com/docs/performance/insights/network-dependency-tree) by reducing the length of chains, reducing the download size of resources, or deferring the download of unnecessary resources to improve page load.

### Render-blocking requests `render-blocking-insight`

Result: Est savings of 100 ms
Description: Requests are blocking the page's initial render, which may delay LCP. [Deferring or inlining](https://developer.chrome.com/docs/performance/insights/render-blocking) can move these network requests out of the critical path.
- url=https://orivion.ae/assets/index-DsN7f0_u.css | totalBytes=1042 | wastedMs=173
- url=https://orivion.ae/assets/app-Do4fh507.css | totalBytes=24252 | wastedMs=173

