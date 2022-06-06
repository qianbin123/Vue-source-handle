export function initState(vm){
  const opts = vm.$options;       // 获取所有的选项
  if(opts.data){
    initData(vm)
  }
}

function initData(vm){
  let data = vm.$options.data;    // data有可能是函数形式，也有可能是对象形式

  typeof data === 'function' ? data.call(vm) : data;
}