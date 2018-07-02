import apiHost from '../config';

// axios基本配置
const config = {
  baseURL: `${apiHost.basePath}`,
  method: 'get',
  withCredentials: false,
  params: {},
  timeout: 10000,
  headers: {
    'Content-type': 'application/json'
  }
};

export default config;
