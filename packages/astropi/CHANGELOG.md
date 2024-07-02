# astropi

## 0.3.1

### Patch Changes

- e4a7fe7: Fixes blog entries sorting.

## 0.3.0

### Minor Changes

- b5fe4e3: Fixed an issue in Astro where pages sharing the same archetypes were incorrectly merged during production. I submitted a patch that has been incorporated into Astro 4.8.0.
- 9b1c52e: Adds a sidebar navigation for the current page headings.
- b3e3c5d: Adds SidebarNavigation component and function to generate a collection navigation.
- eb0edff: Add title and description meta tags where it was possible.

### Patch Changes

- b5be9dc: Add tests for collections and archetypes public functions.
- 1489b5d: Fixes active link on sidebar navigation.

## 0.2.0

### Minor Changes

- 6d05b35: Now blog entries **must have** `date` and `abstract` fields in their frontmatter. Also, change the blog layout and blog cards to display the `date` and `abstract` fields nicely.
- 68b0376: Entries now have a `status` field in their frontmatter, `published` by default. If set to `draft`, the entry will not be displayed in the UI. In development mode, you will still be able to access your draft through the URL.

### Patch Changes

- 8c59ae2: Fix landing styles & content.
- fa9972b: Fix cards styles in dark theme.

## 0.1.2

### Patch Changes

- 6342d47: add some css & some doc content
- 67b9aa1: add exports in package.json

## 0.1.1

### Patch Changes

- d691a8e: replaced astropi imports by @goulvenclech/astropi

## 0.1.0

### Minor Changes

- bbca6b0: First alpha release of Astropi 🚀
