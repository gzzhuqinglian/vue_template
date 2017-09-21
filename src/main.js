import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'

import routes from './config/routes'
import store from './store/'
import components from './components/' //加载公共组件
import * as filters from '@/filters' // 全局filter
import '@/plugins/utils'

//模拟数据
import '@/mock/index.js'  // 该项目所有请求使用mockjs模拟

// rem单位设置
import '@/utils/rem.js'
//引入公共的样式
import '@/style/base.less'
import '@/style/common.less'

// Object.keys(components).forEach((key) => {
//     var name = key.replace(/(\w)/, (v) => v.toUpperCase()) //首字母大写
//     Vue.component(`v${name}`, components[key])
// })

//初始化组件
Vue.use(components)
//初始化过滤器
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.use(VueRouter)

//历史滚动条的处理
const router = new VueRouter({
	routes,
	scrollBehavior (to, from, savedPosition) {
	    if (savedPosition) {
		    return savedPosition
		} else {
			if (from.meta.keepAlive) {
				from.meta.savedPosition = document.body.scrollTop;
			}
		    return { x: 0, y: to.meta.savedPosition ||0}
		}
	}
})


var rkeepAlive;
router.beforeEach(({meta, path}, from, next) => {
    var { auth = true,keepAlive=false } = meta
	rkeepAlive=keepAlive
    var isLogin = Boolean(store.getters.token) //true用户已登录， false用户未登录

    if (auth && !isLogin && path !== '/login') {
        return next({ path: '/login' })
    }
	// if(window.isrefresh){
	// 	window.isrefresh=false;
	// 	meta.keepAlive=false;
	// }
    next()
})

// router.afterEach(router=>{
// 	router.meta.keepAlive=rkeepAlive;
// })




new Vue({
	el: '#app', 
	router,
	store,
	template: '<App/>',
	components:  { App } 
}) 
