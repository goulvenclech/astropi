import type { AstroIntegration } from "astro"
/**
 * UNDERSTANDING ASTRO INTEGRATIONS API
 * Astropi isn't a "starter" Astro project, where the user has to clone a whole project
 * and build on top of it. Instead, it's an Astro integration that can be added to any
 * existing Astro project, or used as a "template" when creating a new Astro project.
 * The Astro Integration API allows us to hook into the Astro build process and inject
 * our own custom logic, like adding routes, modifying the Astro config, etc.
 * This way, the user can have a fully functional Astro project with a single command,
 * and just has to configure it to their needs / add their own content.
 * See reference -> https://docs.astro.build/en/reference/integrations-reference
 */
export default function AstropiIntegration(opts: any): AstroIntegration {
  return {
    name: "astropi",
    hooks: {
      // This hooks run on initialization, before either the Vite or Astro config have resolved.
      // We use this hook to modify the Astro config, and inject our custom routes.
      "astro:config:setup": async ({ injectRoute }) => {
        // Get user intergration config
        console.log("Astropi config:", opts)
        // Inject a route for the homepage
        injectRoute({
          pattern: "/",
          entrypoint: "astropi/pages/index.astro",
          prerender: true,
        })
      },
    },
  }
}
