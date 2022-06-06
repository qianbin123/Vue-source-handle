import { initState } from './state'

// 给Vue增加init方法
export function initMixin(Vue){
  Vue.prototype._init = function(options){
    // vm.$options 就是获取用户的配置（默认以$开头的都是vue内置）
    const vm = this;
    vm.$options = options;

    // 初始化状态
    initState(vm)
  }
}