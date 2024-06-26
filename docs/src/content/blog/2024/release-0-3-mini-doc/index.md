---
title: "Alpha 0.3: minimal documentation"
date: 2024-06-14
abstract: "Small release bringing the foundations both to documenting and testing. Also includes new ways to navigate through documentation pages."
---

## Minimal Documentation

For this version, I tried to add the essentials to the content documentation archetype.

The new documentation layout includes a left sidebar for navigation between pages within the same collection. Pages are fetched from the specified collection and grouped by categories (folders), providing a structured and intuitive navigation experience. In Astro, pages are ordered alphabetically based on their file names. To customize the order, you can prefix file names with numbers. If you prefer not to display numbers in the URL, the slug field in the frontmatter allows you to override the default URL seamlessly.

Additionally, the documentation layout features a right sidebar displaying headings within the current page. It highlights the current heading as you scroll, making it easier to keep track of where you are. 

Like blog posts, documentation entries can be set as published or draft, giving you full control over what content is live.

## Tests in Astropi

I integrated Vitest into the project for comprehensive testing, and from now on, all pull requests will require tests.

I've already added tests for most of the core and utility functions in the Astropi package, and updated the CI/CD pipeline to run tests on each pull request. However, I'm not sure about the best testing policies and tools for our Astro components—both used in the Astropi theme and provided to our users—I'm open to suggestions and contributions on this topic.

## Release notes

The full list of changes is available in the [release notes](https://github.com/goulvenclech/astropi/releases/tag/%40goulvenclech/astropi%400.3.0), and you can share your thoughts on the [dedicated discussion](https://github.com/goulvenclech/astropi/discussions/20) on GitHub.
