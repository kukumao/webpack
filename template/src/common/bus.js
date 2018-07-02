import Vue from 'vue';
let bus;

// 初始化
export const init = () => {
  bus = new Vue();
};
// 事件常量名
export const busName = {
};
// 监听事件
export const onBus = (name, callback) => {
  bus.$on(name, callback);
};
// 广播事件
export const emitBus = (name, val = {}) => {
  bus.$emit(name, val);
};
