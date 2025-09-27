// queries/getProfileBanner.ts
import datoCMSClient from './datoCMSClient';
import { ProfileBanner } from '../types';
import { staticProfileBanner } from '../data/staticData';

const GET_PROFILE_BANNER = `
 {
  profilebanner {
    backgroundImage {
      url
    }
    headline
    resumeLink {
      url
    }
    linkedinLink
    profileSummary
  }
}
`;

export async function getProfileBanner(): Promise<ProfileBanner> {
  try {
    const data = await datoCMSClient.request<{ profilebanner: ProfileBanner }>(GET_PROFILE_BANNER);
    console.log("🚀 ~ getProfileBanner ~ data:", data)
    return data.profilebanner;
  } catch (error) {
    console.warn('DatoCMS not available, using static data:', error);
    return staticProfileBanner;
  }
}
