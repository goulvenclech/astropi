# Astropi - Core package 🪐

This package contains the core of Astropi, including the components, styles, and utilities that power the project. 

## 👀 Understanding Astropi

- Astropi is not a simple "starter" template, but a Astro Integration
. Read more about it and see the main `astropi()` function in -> `packages/astropi/index.ts`.

- Astropi provides a few zod schemas to help you build your documentation, and to generate pages from the user configuration. You can find them in -> `packages/astropi/utils/collections.ts`.

- Astropi comes with a few components and pages to help you build your documentation. You can find them in -> `packages/astropi/components/` & `packages/astropi/layouts/` & `packages/astropi/pages/`.

- Astropi exposes the user configuration trough a Vite plugin with a virtual module. You can find it in -> `packages/astropi/utils/virtual-user-config.ts`.