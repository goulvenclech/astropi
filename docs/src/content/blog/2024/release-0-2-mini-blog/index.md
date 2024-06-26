---
title: "Alpha 0.2: minimal blog" 
date: 2024-05-01
abstract: "Small release to improve the blog archetype and layout. Also, some news about the breaking bug in production, and how it will be fixed in the next Astro release."
---

## Minimal blog

For this version, I've tried to add the essentials to the blog archetype to make it functional.

From now on, blog entries must include the `date` and `abstract` fields in their frontmatter. This information will be displayed on the blog index cards, as well as in the article layout. You can already see these changes in this article header 😉

Additionally, entries now have a `status` field, set to `published` by default. If this field is changed to `draft`, the entry will not be parsed by Astro, hiding it from public view in production. However, in development, these draft entries remain accessible through their direct URLs, allowing authors to preview their work before publication.

I chose not to use a boolean `draft` field because I believe we will soon need additional options. For example, a type of draft that appears in the UI during development, or an entry to publish after a specific semantic versioning (semver).

## About the breaking bug

As explained in the first release, there is currently a bug in Astro that breaks Astropi in production.

To generate multiple documentations or blogs with just a few lines of configuration, we have created `archetypes` that include a basic schema and layout. For instance, if you set up in your configuration two blogs named "news" and "releases", each with two entries, our Astro integration will inject two blog indexes and four article pages into the build process.

If this works seamlessly in development, there is a bug in Astro's build process that merges all routes sharing the same layout (for instance, the two indexes in our example) causing 404 errors. I have documented this in a [GitHub issue](https://github.com/withastro/astro/issues/10622) and worked on [a fix](https://github.com/withastro/astro/pull/10625) since then.

The differing behaviors can be attributed to Vite—the dev environment library used by Astro—which includes two separate bundlers: esbuild for development and RollUp for production. Consequently, Astro is required to maintain two distinct processes for `run dev` and `run build`, which may have slight differences in behavior.

In the build process, each page was identified by their component using the `internals.getPagesByComponent` map, incompatible with Astropi's logic. I replaced this with an internal key that combines both the route and the component, and I made sure that this change did not affect Astro's public API. 

Although the work on the SSR part and navigating through multiple PR reviews was tedious, my contribution has been approved and should be included in Astro’s next minor release! 🎉

## Release notes

The full list of changes is available in the [release notes](https://github.com/goulvenclech/astropi/releases/tag/%40goulvenclech/astropi%400.2.0), and you can share your thoughts on the [dedicated discussion](https://github.com/goulvenclech/astropi/discussions/12) on GitHub.
