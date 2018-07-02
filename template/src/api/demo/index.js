import { fetch } from 'common/fetch';

const api = {
  // 平台列表
  getAllPlatform: 'commoditycenter/shopManage/getAllPlatform',
  // 同步
  synSpecPlatform: 'commoditycenter/shopManage/synSpecPlatform'
};

// 平台列表
const getAllPlatform = (pm) => {
  return fetch({
    url: api.getAllPlatform,
    data: pm
  });
};
// 同步
const synSpecPlatform = (pm) => {
  return fetch({
    url: api.synSpecPlatform,
    timeout: 600000,
    method: 'post',
    data: pm
  });
};
export default {
  api,
  getAllPlatform,
  synSpecPlatform
};
