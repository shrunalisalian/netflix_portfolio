// queries/getWorkPermit.ts
import datoCMSClient from './datoCMSClient';
import { WorkPermit } from '../types';
import { staticWorkPermit } from '../data/staticData';

const GET_WORK_PERMIT = `
  query {
    workPermit {
      visaStatus
      expiryDate
      summary
      additionalInfo
    }
  }
`;

export async function getWorkPermit(): Promise<WorkPermit> {
  try {
    const data = await datoCMSClient.request<{ workPermit: WorkPermit }>(GET_WORK_PERMIT);
    return data.workPermit;
  } catch (error) {
    console.warn('DatoCMS not available, using static data:', error);
    return staticWorkPermit;
  }
}
