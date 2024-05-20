/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\src\pages\studio\[[...index]].jsx` route
 */
import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'

import cases from './sanity/schema/cases'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import {apiVersion, dataset, projectId} from './sanity/env'
import { schema } from './sanity/schema';

export default defineConfig({
  basePath: '/studio',
  projectId: 'd8k6gjyj',
  dataset: 'production',
  // Add and edit the content schema in the './sanity/schema' folder
  schema: { types: [cases] },
  plugins: [
    structureTool(),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({defaultApiVersion: apiVersion}),
  ],
})
