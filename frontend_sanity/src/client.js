import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  // projectId: 'kinkumt0',
  projectId: 'c2xrmmp0',
  dataset: 'production',
  // apiVersion: '2022-09-10',
  apiVersion: '2022-12-28',
  useCdn: true,
  // token: 'skUcIHbIiRhWEvmpQO4MLkEATFOzOEqA3XmmjsVRIQW27wKN4yBsAnx9G86wrIYALx3PdiUqt91l7C0sbAooF7dWeOQt6c88KHQQo9pszjqAM78YLTBopEJw2hV0Bdediei0MBxGVp501X19lW7wCYa2SRzWWU5o61ZJPl7Umko86u6ZbZtH',
  token: 'skZPv10BgFsuNK5Y4lUZfO5HPytQlylLXZwDYxCIZWCs5nWw77jBZtQyqNl3XANTr1qLevW6jiN4zG3E2nIv4BDYJMUe3oRKqjEjwsJzsGEG6KV0psybCmWy0mqZzGRgpf3KynimEQ2eDsNEjKdZ5ELEAMnTllC2VNAX5ASkOMbrh5Arjhym',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
