import apiClient from '../../../services/apiClient.js';

export const subjectsApi = {
  getAll: () => apiClient.get('/subjects'),
  getById: (subjectId) => apiClient.get(`/subjects/${subjectId}`),
  create: (payload) => apiClient.post('/subjects', payload),
  update: (subjectId, payload) => apiClient.patch(`/subjects/${subjectId}`, payload),
  remove: (subjectId) => apiClient.delete(`/subjects/${subjectId}`),
  updateComponent: (subjectId, componentType, payload) =>
    apiClient.patch(`/subjects/${subjectId}/components/${componentType}`, payload),
  addCaItem: (subjectId, payload) => apiClient.post(`/subjects/${subjectId}/ca`, payload),
  updateCaItem: (subjectId, caItemId, payload) =>
    apiClient.patch(`/subjects/${subjectId}/ca/${caItemId}`, payload),
  deleteCaItem: (subjectId, caItemId) =>
    apiClient.delete(`/subjects/${subjectId}/ca/${caItemId}`),
  upsertFinalExam: (subjectId, payload) =>
    apiClient.put(`/subjects/${subjectId}/final-exam`, payload),
};

