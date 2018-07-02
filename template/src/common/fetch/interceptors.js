// 请求拦截器
export const requestInterceptors = (ax) => {
  ax.interceptors.request.use(
    config => {
      return config;
    },
    err => {
      return Promise.reject(err);
    });
};

// 响应拦截器
export const responseInterceptors = (ax) => {
  ax.interceptors.response.use(
    response => {
      return response;
    },
    error => {
      if (error.response) {
        let status = error.response.status;
        if ('400'.indexOf(status) > -1 || '404'.indexOf(status) > -1 ||
          '415'.indexOf(status) > -1 || '500'.indexOf(status) > -1 ||
          '502'.indexOf(status) > -1) {
          console.log('后台出错啦');
        }
      }
      return Promise.reject(error.response.data);
    }
  );
};
