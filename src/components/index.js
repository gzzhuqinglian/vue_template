import header from './header'
import loading from './loading/'
import toast from './toast/index.js'

const components={
    header
}
const plugins={
    loading,toast
}
const install=function(Vue,config={}) {
    if(install.installed) return ;

    Object.keys(components).forEach((key)=>{
        let name = key.replace(/(\w)/, (v) => v.toUpperCase()) //首字母大写
        Vue.component(`v${name}`, components[key])
    })

    //注册全局的弹出框之类的
    Object.keys(plugins).forEach((key)=>{
      Vue[`$${key}`] = Vue.prototype[`$${key}`] = plugins[key]
    })
    
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
};


export default Object.assign({install},components,plugins)