---
title: "Run the project"
---

This are the main commands to run your Astropi project, you can run them in your terminal at the root of your project.

## Development mode

Run the following command to start the development server:

```bash
# If you use pnpm
pnpm run dev
# If you use npm
npm run dev
# If you use yarn
yarn dev
```

The development server will start and you can access your project at `http://localhost:4321`.

Expose your project to the network with the following command:

```bash
# If you use pnpm
pnpm run dev --host
# If you use npm
npm run dev --host
# If you use yarn
yarn dev --host
```

You can access your project from any device on the same network at `http://your-ip:4321`.

## Production mode

Run the following command to build your project for production:

```bash
# If you use pnpm
pnpm run build
# If you use npm
npm run build
# If you use yarn
yarn build
```

Then, run the following command to start the production server:

```bash
# If you use pnpm
pnpm run preview
# If you use npm
npm run preview
# If you use yarn
yarn preview
```

The production server will start and you can access your project at `http://localhost:4321`.
