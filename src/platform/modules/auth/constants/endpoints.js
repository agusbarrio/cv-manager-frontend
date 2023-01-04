import ENV_CONFIG from '../../../app/envConfig';
const baseUrl = `${ENV_CONFIG.REACT_APP_API_URL}/api/auth`;

const AUTH_ENDPOINTS = {
  LOGIN: `${baseUrl}/login`,
  REGISTER: `${baseUrl}/register`,
  LOGOUT: `${baseUrl}/logout`,
};
export default AUTH_ENDPOINTS;
