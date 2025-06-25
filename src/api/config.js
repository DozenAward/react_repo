// src/api/config.js

const BASE_URL = 'http://10.144.100.12:32515'; // Bạn có thể load từ env nếu muốn

const API_ENDPOINTS = {
  LOGIN: `${BASE_URL}/identity/auth/token`,
  getDataByFilter: (id) => `${BASE_URL}/object/${id}/filterMapObject`, // Ví dụ cho Page1
  // thêm các API khác ở đây
};

export default API_ENDPOINTS;
