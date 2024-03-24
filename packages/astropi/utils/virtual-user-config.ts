/**
 * Vite plugin to create a virtual module with user configuration
 * This allow us to access the user configuration like this :
 * `import { config } from "virtual:astropi-user-config"`
 * See -> https://vitejs.dev/guide/api-plugin#virtual-modules-convention
 * @returns
 */
export default function vitePluginAstropiUserConfig(opts: any) {
  const virtualModuleId = "virtual:astropi-user-config"
  const resolvedVirtualModuleId = "\0" + virtualModuleId

  return {
    // Used by error messages and Vite's dev server
    name: "astropi-user-config",
    resolveId(id: any) {
      if (id === virtualModuleId) {
        return resolvedVirtualModuleId
      }
    },
    load(id: any) {
      if (id === resolvedVirtualModuleId) {
        return `export const config = ${JSON.stringify(opts)}`
      }
    },
  }
}
