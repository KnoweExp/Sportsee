export const API_BASE_URL = 'http://localhost:3000';

export const API_ENDPOINTS = {
  USER_MAIN_DATA: (userId) => `${API_BASE_URL}/user/${userId}`,
  USER_ACTIVITY: (userId) => `${API_BASE_URL}/user/${userId}/activity`,
  USER_AVERAGE_SESSIONS: (userId) => `${API_BASE_URL}/user/${userId}/average-sessions`,
  USER_PERFORMANCE: (userId) => `${API_BASE_URL}/user/${userId}/performance`,
};