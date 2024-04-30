/**
 * COLLECTIONS SCHEMAS
 * This module contains all Astropi collections default Zod schemas.
 * `index.ts` publicly exports them for Users use or extension.
 */
import { date, z } from "astro/zod"
/**
 * Default collection for a blog based on MDX files.
 */
export const blogContentCollection = {
  type: "content",
  schema: z.object({
    type: z.literal("blog-content").default("blog-content"),
    title: z.string(),
    abstract: z.string(),
    date: z.date(),
    status: z.enum(["published", "draft"]).default("published"),
  }),
}

/**
 * Default collection for a documentation based on MDX files.
 */
export const docsContentCollection = {
  type: "content",
  schema: z.object({
    type: z.literal("docs-content").default("docs-content"),
    title: z.string(),
    status: z.enum(["published", "draft"]).default("published"),
  }),
}

/**
 * Default collection for a documentation based on OpenAPI yaml files.
 */
export const docsOpenApiCollection = {
  type: "content",
  schema: z.object({
    type: z.literal("docs-openapi").default("docs-openapi"),
    title: z.string(),
    status: z.enum(["published", "draft"]).default("published"),
  }),
}
