// 返回环境
let ENV = (() => {
  if (location.href.indexOf('http://localhost') === 0 || location.href.indexOf('http://127.0.0.1') === 0) {
    return 'LOCAL';
  } else {
    return 'PROD';
  }
})();

let domainPath = '';
let index = 0;
// domainPath
if (location.href.indexOf('http://localhost') === 0 || location.href.indexOf('http://127.0.0.1') === 0) {
  index = window.location.href.indexOf(window.location.hash) - 1;
} else {
  index = window.location.href.indexOf(window.location.pathname);
}
domainPath = window.location.href.substring(0, index);

// 接口baseURL
let Config = {
  LOCAL: {
    basePath: domainPath + '/api'
  },
  PROD: {
    basePath: domainPath
  }
};

export default Config[ENV];
