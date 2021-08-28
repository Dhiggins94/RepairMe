import api from './api-config';

export const getAllRepairGuide = async () => {
  const resp = await api.get('/repair_guides');
  return resp.data;
};

export const getOneRepairGuide = async (id) => {
  const resp = await api.get(`/repair_guides/${id}`);
  return resp.data;
};

export const postRepairGuide = async (repairGuideData) => {
  const resp = await api.post('/repair_guides', { repairGuide: repairGuideData });
  return resp.data;
};

export const putRepairGuide = async (id, repairGuideData) => {
  const resp = await api.put(`/repair_guides/${id}`, { repairGuide: repairGuideData });
  return resp.data;
};

export const deleteRepairGuide = async (id) => {
  const resp = await api.delete(`/repair_guides/${id}`);
  return resp;
};
