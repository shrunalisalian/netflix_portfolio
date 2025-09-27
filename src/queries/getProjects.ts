// queries/getProjects.ts
import datoCMSClient from './datoCMSClient';
import { Project } from '../types';
import { staticProjects } from '../data/staticData';

const GET_PROJECTS = `
  query {
    allProjects(orderBy: title_ASC) {
      title
      description
      techUsed
      image {
        url
      }
    }
  }
`;

export async function getProjects(): Promise<Project[]> {
  try {
    const data = await datoCMSClient.request<{ allProjects: Project[] }>(GET_PROJECTS);
    return data.allProjects;
  } catch (error) {
    console.warn('DatoCMS not available, using static data:', error);
    return staticProjects;
  }
}
