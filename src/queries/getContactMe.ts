// queries/getContactMe.ts
import datoCMSClient from './datoCMSClient';
import { ContactMe } from '../types';
import { staticContactMe } from '../data/staticData';

const GET_CONTACT_ME = `
  query {
    contactMe {
      profilePicture {
        url
      }
      name
      title
      summary
      companyUniversity
      linkedinLink
      email
      phoneNumber
    }
  }
`;

export async function getContactMe(): Promise<ContactMe> {
  try {
    const data = await datoCMSClient.request<{ contactMe: ContactMe }>(GET_CONTACT_ME);
    return data.contactMe;
  } catch (error) {
    console.warn('DatoCMS not available, using static data:', error);
    return staticContactMe;
  }
}
