import { defineConfig } from 'astro/config';
import sanity from '@sanity/astro';

export default defineConfig({
  integrations: [
    sanity({
      projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
      dataset: import.meta.env.PUBLIC_SANITY_DATASET,
      apiVersion: import.meta.env.PUBLIC_SANITY_API_VERSION,
      useCdn: true, // `false` if you want instant real-time draft previews
    }),
  ],
});