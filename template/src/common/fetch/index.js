import Axios from 'axios';
import config from './config';
import { requestInterceptors, responseInterceptors } from './interceptors';

let ax = null;

// 初始化
export const initAxios = () => {
  ax = Axios.create(config);
  requestInterceptors(ax);
  responseInterceptors(ax);
};

// 请求
export const fetch = (config) => {
  if (!ax) {
    throw new Error('axios实例未初始化');
  }
  // 参数设置
  let params = {};
  if (String(config.method).toLowerCase() === 'post') {
    params = config.params;
  } else {
    params = config.data;
  }
  config.params = {
    ...(params || {})
  };
  // 接口返回
  return new Promise((resolve, reject) => {
    ax(config)
      .then(response => {
        resolve(response.data);
      })
      .catch(error => {
        reject(error);
      });
  });
};
