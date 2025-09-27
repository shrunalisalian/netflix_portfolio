// queries/getSkills.ts
import datoCMSClient from './datoCMSClient';
import { Skill } from '../types';
import { staticSkills } from '../data/staticData';

const GET_SKILLS = `
{
  allSkills(orderBy: category_ASC) {
    name
    category
    description
    icon
  }
}
`;

export async function getSkills(): Promise<Skill[]> {
  try {
    const data = await datoCMSClient.request<{ allSkills: Skill[] }>(GET_SKILLS);
    return data.allSkills;
  } catch (error) {
    console.warn('DatoCMS not available, using static data:', error);
    return staticSkills;
  }
}
