---
title: "Alpha 0.1 - Hello World 👋"
date: 2023-03-31
abstract: "Astropi is an Astro Integration that helps you build beautiful and accessible API documentation for your projects."
---

I just published Astropi on NPM, so you can start using it by running the following command:

```bash
# If you use npm
npm create astro --template github:goulvenclech/astropi/starter
# If you use yarn
yarn create astro --template github:goulvenclech/astropi/starter
# If you use pnpm
pnpm create astro --template github:goulvenclech/astropi/starter
```

## Astropi is an Astro Integration

[Astro](https://astro.build/) is a fast and modern [Static Site Generator](https://en.wikipedia.org/wiki/Static_site_generator). You can read [this article from my blog](https://goulven-clech.dev/2023/launching-blog-astro), which explains in detail how Astro works, how it stands out from the competition, and why it's the perfect choice for beginners.

Astropi is build on top of Astro, it's both a starter template and a set of components, styles, and utilities that help you build beautiful and accessible API documentation for your projects. All you need to do is install Astropi, writes a few lines of setup, and start writing your documentation.

Unlike the majority of templates, where the user clone a whole project and build on top of it, Astropi is an Astro Integration. Using the [Integrations API](https://docs.astro.build/en/reference/integrations-reference) allows us to hook into the Astro build process and inject our own custom logic, like adding routes, modifying the Astro config, etc.

This way, the user has a very clean project structure, with most boilerplate code abstracted away, and can focus on writing the documentation. 

## Current features

This alpha release mostly focus on the core features of Astropi. But you can start using the first available features :

- **Blog Content Collection** -> Based on Markdown/MDX files, you can create as many basic blog sections as you want.
- **Header Navigation** -> Navigation links are generated from your collections, allowing you to navigate between your sections.

