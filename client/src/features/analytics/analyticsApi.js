import apiClient from '../../services/apiClient.js';

export const analyticsApi = {
  overview: () => apiClient.get('/analytics/overview'),
};

