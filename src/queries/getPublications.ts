// queries/getPublications.ts
import datoCMSClient from './datoCMSClient';
import { Publication } from '../types';
import { staticPublications } from '../data/staticData';

const GET_PUBLICATIONS = `
  query {
    allPublications {
      title
      authors
      publishedDate
      link
      iconName
      description
    }
  }
`;

export async function getPublications(): Promise<Publication[]> {
  try {
    const data = await datoCMSClient.request<{ allPublications: Publication[] }>(GET_PUBLICATIONS);
    return data.allPublications;
  } catch (error) {
    console.warn('DatoCMS not available, using static data:', error);
    return staticPublications;
  }
}
