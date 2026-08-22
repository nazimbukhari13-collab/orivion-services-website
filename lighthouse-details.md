# Orivion Lighthouse detailed findings

Generated: 2026-08-22T20:56:55.298Z

## Mobile

### Uses ARIA roles only on compatible elements `aria-allowed-role`

Description: Many HTML elements can only be assigned certain ARIA roles. Using ARIA roles where they are not allowed can interfere with the accessibility of the web page. [Learn more about ARIA roles](https://dequeuniversity.com/rules/axe/4.12/aria-allowed-role).

### Deprecated ARIA roles were not used `aria-deprecated-role`

Description: Deprecated ARIA roles may not be processed correctly by assistive technology. [Learn more about deprecated ARIA roles](https://dequeuniversity.com/rules/axe/4.12/aria-deprecated-role).

### ARIA input fields have accessible names `aria-input-field-name`

Description: When an input field doesn't have an accessible name, screen readers announce it with a generic name, making it unusable for users who rely on screen readers. [Learn more about input field labels](https://dequeuniversity.com/rules/axe/4.12/aria-input-field-name).

### ARIA `meter` elements have accessible names `aria-meter-name`

Description: When a meter element doesn't have an accessible name, screen readers announce it with a generic name, making it unusable for users who rely on screen readers. [Learn how to name `meter` elements](https://dequeuniversity.com/rules/axe/4.12/aria-meter-name).

### ARIA `progressbar` elements have accessible names `aria-progressbar-name`

Description: When a `progressbar` element doesn't have an accessible name, screen readers announce it with a generic name, making it unusable for users who rely on screen readers. [Learn how to label `progressbar` elements](https://dequeuniversity.com/rules/axe/4.12/aria-progressbar-name).

### Elements use prohibited ARIA attributes `aria-prohibited-attr`

Description: Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies. [Learn more about prohibited ARIA roles](https://dequeuniversity.com/rules/axe/4.12/aria-prohibited-attr).
- selector=div.o-split > div.o-panel > form.o-form > div.o-turnstile | snippet=<div class="o-turnstile" aria-label="Spam protection"> | explanation=Fix all of the following: aria-label attribute cannot be used on a div with no valid role attribute.

### `[role]`s have all required `[aria-*]` attributes `aria-required-attr`

Description: Some ARIA roles have required attributes that describe the state of the element to screen readers. [Learn more about roles and required attributes](https://dequeuniversity.com/rules/axe/4.12/aria-required-attr).

### Elements with an ARIA `[role]` that require children to contain a specific `[role]` have all required children. `aria-required-children`

Description: Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions. [Learn more about roles and required children elements](https://dequeuniversity.com/rules/axe/4.12/aria-required-children).

### ARIA toggle fields have accessible names `aria-toggle-field-name`

Description: When a toggle field doesn't have an accessible name, screen readers announce it with a generic name, making it unusable for users who rely on screen readers. [Learn more about toggle fields](https://dequeuniversity.com/rules/axe/4.12/aria-toggle-field-name).

### ARIA `tooltip` elements have accessible names `aria-tooltip-name`

Description: When a tooltip element doesn't have an accessible name, screen readers announce it with a generic name, making it unusable for users who rely on screen readers. [Learn how to name `tooltip` elements](https://dequeuniversity.com/rules/axe/4.12/aria-tooltip-name).

### ARIA `treeitem` elements have accessible names `aria-treeitem-name`

Description: When a `treeitem` element doesn't have an accessible name, screen readers announce it with a generic name, making it unusable for users who rely on screen readers. [Learn more about labeling `treeitem` elements](https://dequeuniversity.com/rules/axe/4.12/aria-treeitem-name).

### Background and foreground colors do not have a sufficient contrast ratio. `color-contrast`

Description: Low-contrast text is difficult or impossible for many users to read. [Learn how to provide sufficient color contrast](https://dequeuniversity.com/rules/axe/4.12/color-contrast).
- selector=main#main-content > div.marquee > div.track > span | snippet=<span> | explanation=Fix any of the following: Element has insufficient color contrast of 4.19 (foreground color: #6f7681, background color: #f4f5f7, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1
- selector=main#main-content > div.marquee > div.track > span | snippet=<span> | explanation=Fix any of the following: Element has insufficient color contrast of 4.19 (foreground color: #6f7681, background color: #f4f5f7, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1
- selector=main#main-content > div.marquee > div.track > span | snippet=<span> | explanation=Fix any of the following: Element has insufficient color contrast of 4.19 (foreground color: #6f7681, background color: #f4f5f7, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1
- selector=div.wrap > div.sec-head > div > div.sec-tag | snippet=<div class="sec-tag"> | explanation=Fix any of the following: Element has insufficient color contrast of 4.19 (foreground color: #6f7681, background color: #f4f5f7, font size: 8.3pt (11px), font weight: normal). Expected contrast ratio of 4.5:1
- selector=section#services > div.wrap > div.sec-head > p.sec-note | snippet=<p class="sec-note"> | explanation=Fix any of the following: Element has insufficient color contrast of 4.19 (foreground color: #6f7681, background color: #f4f5f7, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1
- selector=section#services > div.wrap > div > div.sec-tag | snippet=<div class="sec-tag rv in" style="margin-bottom:8px"> | explanation=Fix any of the following: Element has insufficient color contrast of 4.19 (foreground color: #6f7681, background color: #f4f5f7, font size: 8.3pt (11px), font weight: normal). Expected contrast ratio of 4.5:1
- selector=section#services > div.wrap > div > div.sec-tag | snippet=<div class="sec-tag rv in" style="margin-bottom:8px"> | explanation=Fix any of the following: Element has insufficient color contrast of 4.19 (foreground color: #6f7681, background color: #f4f5f7, font size: 8.3pt (11px), font weight: normal). Expected contrast ratio of 4.5:1
- selector=div.wrap > div.sec-head > div > div.sec-tag | snippet=<div class="sec-tag"> | explanation=Fix any of the following: Element has insufficient color contrast of 3.94 (foreground color: #6f7681, background color: #eceef1, font size: 8.3pt (11px), font weight: normal). Expected contrast ratio of 4.5:1
- selector=section.o-alt > div.wrap > div.sec-head > p.sec-note | snippet=<p class="sec-note"> | explanation=Fix any of the following: Element has insufficient color contrast of 3.94 (foreground color: #6f7681, background color: #eceef1, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1
- selector=div.wrap > div.proc-grid > div.proc > p | snippet=<p> | explanation=Fix any of the following: Element has insufficient color contrast of 3.94 (foreground color: #6f7681, background color: #eceef1, font size: 10.9pt (14.5px), font weight: normal). Expected contrast ratio of 4.5:1
- selector=div.wrap > div.proc-grid > div.proc > p | snippet=<p> | explanation=Fix any of the following: Element has insufficient color contrast of 3.94 (foreground color: #6f7681, background color: #eceef1, font size: 10.9pt (14.5px), font weight: normal). Expected contrast ratio of 4.5:1
- selector=div.wrap > div.proc-grid > div.proc > p | snippet=<p> | explanation=Fix any of the following: Element has insufficient color contrast of 3.94 (foreground color: #6f7681, background color: #eceef1, font size: 10.9pt (14.5px), font weight: normal). Expected contrast ratio of 4.5:1

### ARIA IDs are unique `duplicate-id-aria`

Description: The value of an ARIA ID must be unique to prevent other instances from being overlooked by assistive technologies. [Learn how to fix duplicate ARIA IDs](https://dequeuniversity.com/rules/axe/4.12/duplicate-id-aria).

### Custom controls have ARIA roles `custom-controls-roles`

Description: Custom interactive controls have appropriate ARIA roles. [Learn how to add roles to custom controls](https://developer.chrome.com/docs/lighthouse/accessibility/custom-control-roles/).

### Avoids enormous network payloads `total-byte-weight`

Result: Total size was 2,086 KiB
Description: Large network payloads cost users real money and are highly correlated with long load times. [Learn how to reduce payload sizes](https://developer.chrome.com/docs/lighthouse/performance/total-byte-weight/).
- url=https://orivion.ae/media/orivion-hero-mobile.mp4 | totalBytes=1708350
- url=https://orivion.ae/assets/index-DBs74xaV.js | totalBytes=136054
- url=https://challenges.cloudflare.com/cdn-cgi/challenge-platform/h/b/turnstile/f/av0/rch/eq1g5/0x4AAAAAAEYp1fAFZMKvKj1T/light/fbE/new/flexible?lang=auto | totalBytes=104741
- url=https://fonts.gstatic.com/s/jetbrainsmono/v24/tDbv2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yK0BNntkaToggR7BYZbNPxDcwgknk-4.woff2 | totalBytes=30973
- url=https://challenges.cloudflare.com/turnstile/v0/b/e694063b5082/api.js | totalBytes=27495
- url=https://fonts.gstatic.com/s/spacegrotesk/v22/V8mDoQDjQSkFtoMM3T6r8E7mPbF4C_k3HqU.woff2 | totalBytes=22349
- url=https://fonts.gstatic.com/s/instrumentserif/v5/jizHRFtNs2ka5fXjeivQ4LroWlx-6zAjjH7Motmp5g.woff2 | totalBytes=15711
- url=https://orivion.ae/media/orivion-hero-mobile-poster.webp | totalBytes=13570
- url=https://orivion.ae/assets/styles-C7BVDUoQ.css | totalBytes=13495
- url=https://static.cloudflareinsights.com/beacon.min.js/v4513226cdae34746b4dedf0b4dfa099e1781791509496 | totalBytes=11577

### Reduce unused JavaScript `unused-javascript`

Result: Est savings of 51 KiB
Description: Reduce unused JavaScript and defer loading scripts until they are required to decrease bytes consumed by network activity. [Learn how to reduce unused JavaScript](https://developer.chrome.com/docs/lighthouse/performance/unused-javascript/).
- url=https://orivion.ae/assets/index-DBs74xaV.js | totalBytes=135763 | wastedBytes=52142

### Use efficient cache lifetimes `cache-insight`

Result: Est savings of 1,673 KiB
Description: A long cache lifetime can speed up repeat visits to your page. [Learn more about caching](https://developer.chrome.com/docs/performance/insights/cache).
- url=https://orivion.ae/media/orivion-hero-mobile.mp4 | totalBytes=1708350 | wastedBytes=1708350 | cacheLifetimeMs=0
- url=https://static.cloudflareinsights.com/beacon.min.js/v4513226cdae34746b4dedf0b4dfa099e1781791509496 | totalBytes=11577 | wastedBytes=4630.8 | cacheLifetimeMs=86400000

### Forced reflow `forced-reflow-insight`

Description: A forced reflow occurs when JavaScript queries geometric properties (such as offsetWidth) after styles have been invalidated by a change to the DOM state. This can result in poor performance. Learn more about [forced reflows](https://developer.chrome.com/docs/performance/insights/forced-reflow) and possible mitigations.

### LCP request discovery `lcp-discovery-insight`

Description: [Optimize LCP](https://developer.chrome.com/docs/performance/insights/lcp-discovery) by making the LCP image discoverable from the HTML immediately, and avoiding lazy-loading

### Network dependency tree `network-dependency-tree-insight`

Description: [Avoid chaining critical requests](https://developer.chrome.com/docs/performance/insights/network-dependency-tree) by reducing the length of chains, reducing the download size of resources, or deferring the download of unnecessary resources to improve page load.

### Render-blocking requests `render-blocking-insight`

Description: Requests are blocking the page's initial render, which may delay LCP. [Deferring or inlining](https://developer.chrome.com/docs/performance/insights/render-blocking) can move these network requests out of the critical path.
- url=https://orivion.ae/assets/orivion-CSq5KBvZ.css | totalBytes=11103 | wastedMs=171
- url=https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500&family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@300;400&display=swap | totalBytes=1415 | wastedMs=820
- url=https://orivion.ae/assets/styles-C7BVDUoQ.css | totalBytes=13495 | wastedMs=171

## Desktop

### Uses ARIA roles only on compatible elements `aria-allowed-role`

Description: Many HTML elements can only be assigned certain ARIA roles. Using ARIA roles where they are not allowed can interfere with the accessibility of the web page. [Learn more about ARIA roles](https://dequeuniversity.com/rules/axe/4.12/aria-allowed-role).

### Deprecated ARIA roles were not used `aria-deprecated-role`

Description: Deprecated ARIA roles may not be processed correctly by assistive technology. [Learn more about deprecated ARIA roles](https://dequeuniversity.com/rules/axe/4.12/aria-deprecated-role).

### ARIA input fields have accessible names `aria-input-field-name`

Description: When an input field doesn't have an accessible name, screen readers announce it with a generic name, making it unusable for users who rely on screen readers. [Learn more about input field labels](https://dequeuniversity.com/rules/axe/4.12/aria-input-field-name).

### ARIA `meter` elements have accessible names `aria-meter-name`

Description: When a meter element doesn't have an accessible name, screen readers announce it with a generic name, making it unusable for users who rely on screen readers. [Learn how to name `meter` elements](https://dequeuniversity.com/rules/axe/4.12/aria-meter-name).

### ARIA `progressbar` elements have accessible names `aria-progressbar-name`

Description: When a `progressbar` element doesn't have an accessible name, screen readers announce it with a generic name, making it unusable for users who rely on screen readers. [Learn how to label `progressbar` elements](https://dequeuniversity.com/rules/axe/4.12/aria-progressbar-name).

### Elements use prohibited ARIA attributes `aria-prohibited-attr`

Description: Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies. [Learn more about prohibited ARIA roles](https://dequeuniversity.com/rules/axe/4.12/aria-prohibited-attr).
- selector=div.o-split > div.o-panel > form.o-form > div.o-turnstile | snippet=<div class="o-turnstile" aria-label="Spam protection"> | explanation=Fix all of the following: aria-label attribute cannot be used on a div with no valid role attribute.

### `[role]`s have all required `[aria-*]` attributes `aria-required-attr`

Description: Some ARIA roles have required attributes that describe the state of the element to screen readers. [Learn more about roles and required attributes](https://dequeuniversity.com/rules/axe/4.12/aria-required-attr).

### Elements with an ARIA `[role]` that require children to contain a specific `[role]` have all required children. `aria-required-children`

Description: Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions. [Learn more about roles and required children elements](https://dequeuniversity.com/rules/axe/4.12/aria-required-children).

### ARIA toggle fields have accessible names `aria-toggle-field-name`

Description: When a toggle field doesn't have an accessible name, screen readers announce it with a generic name, making it unusable for users who rely on screen readers. [Learn more about toggle fields](https://dequeuniversity.com/rules/axe/4.12/aria-toggle-field-name).

### ARIA `tooltip` elements have accessible names `aria-tooltip-name`

Description: When a tooltip element doesn't have an accessible name, screen readers announce it with a generic name, making it unusable for users who rely on screen readers. [Learn how to name `tooltip` elements](https://dequeuniversity.com/rules/axe/4.12/aria-tooltip-name).

### ARIA `treeitem` elements have accessible names `aria-treeitem-name`

Description: When a `treeitem` element doesn't have an accessible name, screen readers announce it with a generic name, making it unusable for users who rely on screen readers. [Learn more about labeling `treeitem` elements](https://dequeuniversity.com/rules/axe/4.12/aria-treeitem-name).

### Background and foreground colors do not have a sufficient contrast ratio. `color-contrast`

Description: Low-contrast text is difficult or impossible for many users to read. [Learn how to provide sufficient color contrast](https://dequeuniversity.com/rules/axe/4.12/color-contrast).
- selector=div#top > nav#nav > div.nav-links > a.active | snippet=<a class="active" href="/" data-status="active" aria-current="page"> | explanation=Fix any of the following: Element has insufficient color contrast of 4.19 (foreground color: #6f7681, background color: #f4f5f7, font size: 10.1pt (13.5px), font weight: normal). Expected contrast ratio of 4.5:1
- selector=nav#nav > div.nav-links > div.nav-item > a | snippet=<a href="/services"> | explanation=Fix any of the following: Element has insufficient color contrast of 4.19 (foreground color: #6f7681, background color: #f4f5f7, font size: 10.1pt (13.5px), font weight: normal). Expected contrast ratio of 4.5:1
- selector=div#top > nav#nav > div.nav-links > a | snippet=<a href="/about"> | explanation=Fix any of the following: Element has insufficient color contrast of 4.19 (foreground color: #6f7681, background color: #f4f5f7, font size: 10.1pt (13.5px), font weight: normal). Expected contrast ratio of 4.5:1
- selector=div#top > nav#nav > div.nav-links > a | snippet=<a href="/jurisdictions"> | explanation=Fix any of the following: Element has insufficient color contrast of 4.19 (foreground color: #6f7681, background color: #f4f5f7, font size: 10.1pt (13.5px), font weight: normal). Expected contrast ratio of 4.5:1
- selector=div#top > nav#nav > div.nav-links > a | snippet=<a href="/why-dubai"> | explanation=Fix any of the following: Element has insufficient color contrast of 4.19 (foreground color: #6f7681, background color: #f4f5f7, font size: 10.1pt (13.5px), font weight: normal). Expected contrast ratio of 4.5:1
- selector=div#top > nav#nav > div.nav-links > a | snippet=<a href="/blog"> | explanation=Fix any of the following: Element has insufficient color contrast of 4.19 (foreground color: #6f7681, background color: #f4f5f7, font size: 10.1pt (13.5px), font weight: normal). Expected contrast ratio of 4.5:1
- selector=div#top > nav#nav > div.nav-links > a | snippet=<a href="/faqs"> | explanation=Fix any of the following: Element has insufficient color contrast of 4.19 (foreground color: #6f7681, background color: #f4f5f7, font size: 10.1pt (13.5px), font weight: normal). Expected contrast ratio of 4.5:1
- selector=div#top > nav#nav > div.nav-links > a | snippet=<a href="/contact"> | explanation=Fix any of the following: Element has insufficient color contrast of 4.19 (foreground color: #6f7681, background color: #f4f5f7, font size: 10.1pt (13.5px), font weight: normal). Expected contrast ratio of 4.5:1
- selector=main#main-content > div.marquee > div.track > span | snippet=<span> | explanation=Fix any of the following: Element has insufficient color contrast of 4.19 (foreground color: #6f7681, background color: #f4f5f7, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1
- selector=main#main-content > div.marquee > div.track > span | snippet=<span> | explanation=Fix any of the following: Element has insufficient color contrast of 4.19 (foreground color: #6f7681, background color: #f4f5f7, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1
- selector=main#main-content > div.marquee > div.track > span | snippet=<span> | explanation=Fix any of the following: Element has insufficient color contrast of 4.19 (foreground color: #6f7681, background color: #f4f5f7, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1
- selector=main#main-content > div.marquee > div.track > span | snippet=<span> | explanation=Fix any of the following: Element has insufficient color contrast of 4.19 (foreground color: #6f7681, background color: #f4f5f7, font size: 11.3pt (15px), font weight: normal). Expected contrast ratio of 4.5:1

### ARIA IDs are unique `duplicate-id-aria`

Description: The value of an ARIA ID must be unique to prevent other instances from being overlooked by assistive technologies. [Learn how to fix duplicate ARIA IDs](https://dequeuniversity.com/rules/axe/4.12/duplicate-id-aria).

### Custom controls have ARIA roles `custom-controls-roles`

Description: Custom interactive controls have appropriate ARIA roles. [Learn how to add roles to custom controls](https://developer.chrome.com/docs/lighthouse/accessibility/custom-control-roles/).

### Avoid enormous network payloads `total-byte-weight`

Result: Total size was 3,604 KiB
Description: Large network payloads cost users real money and are highly correlated with long load times. [Learn how to reduce payload sizes](https://developer.chrome.com/docs/lighthouse/performance/total-byte-weight/).
- url=https://orivion.ae/media/orivion-hero-desktop.mp4 | totalBytes=2843934
- url=https://challenges.cloudflare.com/cdn-cgi/challenge-platform/h/b/fo/1256932074:1787428819:h-RRdHXPQ3lWAhUskiq4A6uoKioo04VKNxJkPlrRAk8/a2f4c9379bf3ae26/w.scUXadxytlDJ01zQ17APTf_fXFbcOEyOl.lP9gkQ8-1787432206-1.2.1.1-Xw0zVE583BDC7dAW3sBlOlj5Ylw5a20OvgWKHaObkyjyBu2CQq6jC7Nltinat5te | totalBytes=402771
- url=https://orivion.ae/assets/index-DBs74xaV.js | totalBytes=136260
- url=https://challenges.cloudflare.com/cdn-cgi/challenge-platform/h/b/turnstile/f/av0/rch/i9n3u/0x4AAAAAAEYp1fAFZMKvKj1T/light/fbE/new/flexible?lang=auto | totalBytes=105410
- url=https://fonts.gstatic.com/s/jetbrainsmono/v24/tDbv2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yK0BNntkaToggR7BYZbNPxDcwgknk-4.woff2 | totalBytes=30973
- url=https://challenges.cloudflare.com/turnstile/v0/b/e694063b5082/api.js | totalBytes=27432
- url=https://fonts.gstatic.com/s/spacegrotesk/v22/V8mDoQDjQSkFtoMM3T6r8E7mPbF4C_k3HqU.woff2 | totalBytes=22349
- url=https://orivion.ae/media/orivion-hero-desktop-poster.webp | totalBytes=17328
- url=https://fonts.gstatic.com/s/instrumentserif/v5/jizHRFtNs2ka5fXjeivQ4LroWlx-6zAjjH7Motmp5g.woff2 | totalBytes=15711
- url=https://orivion.ae/assets/styles-C7BVDUoQ.css | totalBytes=13620

### Reduce unused JavaScript `unused-javascript`

Result: Est savings of 51 KiB
Description: Reduce unused JavaScript and defer loading scripts until they are required to decrease bytes consumed by network activity. [Learn how to reduce unused JavaScript](https://developer.chrome.com/docs/lighthouse/performance/unused-javascript/).
- url=https://orivion.ae/assets/index-DBs74xaV.js | totalBytes=135769 | wastedBytes=52144

### Use efficient cache lifetimes `cache-insight`

Result: Est savings of 2,789 KiB
Description: A long cache lifetime can speed up repeat visits to your page. [Learn more about caching](https://developer.chrome.com/docs/performance/insights/cache).
- url=https://orivion.ae/media/orivion-hero-desktop.mp4 | totalBytes=2843934 | wastedBytes=2843934 | cacheLifetimeMs=0
- url=https://challenges.cloudflare.com/cdn-cgi/challenge-platform/h/b/ci/a2f4c9379bf3ae26/1787432206416/oMZCNWlLLtvpWi_dad8whXJvsr9LciARmSzx47euYbA-1787432206-1.3.1.1-V1dGFMsvIBN5MO99q0CO1Low1GqqVGp45vO8xVVqLM7jjHVZFWjXaqTIYashGXHJzMU_lI01f3dTfc2BWlqH5VpDIa1PGLMKSkgXSXTcdYT1IHV4PJQgR8XbjTe3gikXE55WsJXFG3Pu6swsnWOcg1hop6eDTwu7l909Uithw2ZsJVcCPlBSyonZTqHDo7jCOnBPcx6dppQhlloYp1ZsF4FFEdyV3EgDDNcwSXDtHkQdZFtGl0c_Y.QfDSdt._Ol_a_xmhmo2SIrqAUen6K1PlsJtQyDI3z52OJZVLByr1_xFRRoWg3W735gr4zUVuDkS1UcC8.g.qim86NKRk0RABvfnhEZXhILsOwPppcvdDEbCW1x.Qm0AACrVske1AD1aRNSCK0wQs5doaOsApoaoGP1Tw5zjsC8QOBq2B9kI8jr7tl3VaWFrfYV4SQubym8LHJx5cSnphtV7UXxclKJef31YT.V.viPssXQ_ef.z03.FkfuPpWb_2nVCtHvCOAZ4I5BYuu2OG5_ebm4BQkOtEh0_lzf4Yn.2OoW.TJEZzqDap9iyS_sExqyWAj0Zk3XHXHoEF00N3TmuCskcvPSW7JSbEtT_esYJSGhIn9mnAvAoeDPfaUvHDKJfDMjOJ5y_5XRI5dS_jfDVtppS94sbaAK0n1_ZIoD6dwJ.kkFuliRYlMpl.xYETFSBpSFo2pncUphwPTlM4_CJjwUKCgxH2QEDhY988q31Fv5c3gv_mc | totalBytes=7303 | wastedBytes=7303 | cacheLifetimeMs=0
- url=https://static.cloudflareinsights.com/beacon.min.js/v4513226cdae34746b4dedf0b4dfa099e1781791509496 | totalBytes=11577 | wastedBytes=4630.8 | cacheLifetimeMs=86400000

### LCP request discovery `lcp-discovery-insight`

Description: [Optimize LCP](https://developer.chrome.com/docs/performance/insights/lcp-discovery) by making the LCP image discoverable from the HTML immediately, and avoiding lazy-loading

### Network dependency tree `network-dependency-tree-insight`

Description: [Avoid chaining critical requests](https://developer.chrome.com/docs/performance/insights/network-dependency-tree) by reducing the length of chains, reducing the download size of resources, or deferring the download of unnecessary resources to improve page load.

### Render-blocking requests `render-blocking-insight`

Result: Est savings of 180 ms
Description: Requests are blocking the page's initial render, which may delay LCP. [Deferring or inlining](https://developer.chrome.com/docs/performance/insights/render-blocking) can move these network requests out of the critical path.
- url=https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500&family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@300;400&display=swap | totalBytes=1415 | wastedMs=281
- url=https://orivion.ae/assets/orivion-CSq5KBvZ.css | totalBytes=11332 | wastedMs=271
- url=https://orivion.ae/assets/styles-C7BVDUoQ.css | totalBytes=13620 | wastedMs=152

