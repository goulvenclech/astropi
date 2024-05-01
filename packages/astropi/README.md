# Astropi - Let's make a better doc 🪐

> [!WARNING]
> Astropi is in early development and is not ready for public use... but new contributors are welcome!

[Astropi](https://astropi.goulven-clech.dev/) is a free and open-source project that helps you build beautiful and accessible API documentation for your projects. It's built with [Astro](https://astro.build/), a fast and modern Static Site Generator.

This core package contains the components, styles, and utilities that power the project.

## How to install

Create a new Astropi project by running the following command:

```bash
# If you use pnpm
pnpm create astro --template github:goulvenclech/astropi/starter
# If you use npm
npm create astro --template github:goulvenclech/astropi/starter
# If you use yarn
yarn create astro --template github:goulvenclech/astropi/starter
```

Or add Astropi to an existing Astro project:

```bash
# If you use pnpm
pnpm astro add @goulvenclech/astropi
# If you use npm
npx astro add @goulvenclech/astropi
# If you use yarn
yarn astro add @goulvenclech/astropi
```

## How to use

Check out the [Astropi documentation](https://astropi.goulven-clech.dev/) for more information. Here are some quick links:

- [Getting Started](https://astropi.goulven-clech.dev/learn/2-getting-started)
- [Creating a blog](https://astropi.goulven-clech.dev/learn/3-create-a-blog)

## How to contribute

Astropi is a community-driven project, and we welcome contributions of all kinds. If you experience any problem with our project, please [open an issue](https://github.com/goulvenclech/astropi/issues). If you have any suggestions, please [open a discussion](https://github.com/goulvenclech/astropi/discussions).

If you want to contribute to Astropi, please read the [Contributing Guide](./CONTRIBUTING.md) (work in progress) and the [Code of Conduct](./CODE_OF_CONDUCT.md) before submitting a pull request. You can find more technical information about the project in the `README.md` files of each main directory:

- `./packages/astropi/` contains the core of Astropi, including the components, styles, and utilities that power the project.

- `./docs/` contains the Astropi documentation website (built with Astropi!)

- `./packages/astropi-starter/` contains the Astropi starter template, which is cloned when you create a new Astropi project.

## License

Astropi is licensed under the [MIT License](./LICENSE.md). You are free to use, modify, and distribute this project. You must include the original license in any fork of this project. Attribution is appreciated.

## Aknowledgements

Thanks [Astro](https://astro.build/) for being the core of Astropi and an amazing Static Site Generator.

Thanks [Starlight](https://starlight.astro.build) for being the main inspiration for Astropi, alongside other documentation tools like [Readme.com](https://readme.com/), [GitBook](https://docs.gitbook.com/), [VitePress](https://vitepress.vuejs.org/), etc.
