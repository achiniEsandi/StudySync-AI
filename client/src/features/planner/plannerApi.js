import apiClient from '../../services/apiClient.js';

export const plannerApi = {
  list: () => apiClient.get('/planner'),
};

