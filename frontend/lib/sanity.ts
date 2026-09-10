import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const sanityClient = createClient({
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
  dataset: import.meta.env.PUBLIC_SANITY_DATASET,
  apiVersion: '2024-01-01',
  useCdn: true,
});

// Helper to build optimized image URLs from Sanity image objects
const builder = imageUrlBuilder(sanityClient);

export function urlFor(source: any) {
  return builder.image(source);
}

// Fetch helper wrapper
export async function getSanityData<T>(query: string): Promise<T> {
  return await sanityClient.fetch(query);
}