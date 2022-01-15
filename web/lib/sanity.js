import SanityClient from '@sanity/client';

export const sanityClient = SanityClient({
  projectId: '156a3p5o',
  dataset: 'production',
  apiVersion: '2022-01-15',
  useCdn: true,
});
