---
title: "Alpha 0.1: Hello World 👋"
date: 2024-03-31
abstract: "Astropi wants to help you build beautiful and accessible API documentation for your projects. It's built with Astro, a fast and modern static site generator."
---

The first alpha version of Astropi has just been released on NPM. To try it out on a new project, all you need is one command:

```bash
# If you use pnpm
pnpm create astro --template github:goulvenclech/astropi/starter
# If you use npm
npm create astro --template github:goulvenclech/astropi/starter
# If you use yarn
yarn create astro --template github:goulvenclech/astropi/starter
```

## Astropi is an Astro Integration

[Astro](https://astro.build/) is a fast and modern [static site generator](https://en.wikipedia.org/wiki/Static_site_generator). You can read [this article from my blog](https://goulven-clech.dev/2023/launching-blog-astro) explaining in detail how Astro works, how it stands out from the competition, and why it's the perfect choice for beginners.

Astropi is built on top of Astro. It's both a starter template and a set of components, styles, and utilities that help you build beautiful and accessible API documentation for your projects. All you need to do is to install Astropi, write a few lines of setup, and start writing your documentation.

Unlike the majority of templates, where the user clones a whole project and builds on top of it, Astropi is an Astro Integration. The [Integrations API](https://docs.astro.build/en/reference/integrations-reference) allows us to hook into the Astro build process and inject our own custom logic, like adding routes, modifying the Astro config, etc.

This way, the user has a very clean project structure, with most boilerplate code abstracted away, and can focus on writing the documentation. 

## Bug in production

If this first alpha version works fine in development mode, there is a breaking bug in production.

To generate multiple documentations or blogs with just a few lines of configuration, we have created `archetypes` that include a basic schema and layout. For instance, if you set up in your configuration two blogs named "news" and "releases", each with two entries, our Astro integration will inject two blog indexes and four article pages into the build process.

If this works seamlessly in development, there is a bug in Astro's build process that merges all routes sharing the same layout (for instance, the two indexes in our example) causing 404 errors. I have documented this in a [GitHub issue](https://github.com/withastro/astro/issues/10622) and I'm working on [a fix](https://github.com/withastro/astro/pull/10625).

Stay tuned for the next release!

## Current features

This first alpha version of Astropi mostly serves as a proof of concept. It includes the following features:

- **Custom collections:** create your own collections from Astropi's archetype.

- **Blog Content archetype:** create a functional blog from Markdown files.

- **Header Navigation:** display links to your collections.

## Want to contribute?

If this project piqued your interest, I would be happy to welcome you as a contributor. 

Feel free to open an issue, submit a pull request, or just reach out on [Github discussions](https://github.com/goulvenclech/astropi/discussions). Astropi is a young project, and there is a lot of work to do.

During the next few weeks, I will create issue & PR templates, a contribution guide, and everything that could help you to contribute to this project. If you think something is missing, please let me know!
