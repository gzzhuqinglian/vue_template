import Vue from 'vue'
import { loginByEmail,getInfo } from 'api/login';

export const USER_SIGNIN = 'USER_SIGNIN' //登录成功
export const USER_SIGNOUT = 'USER_SIGNOUT' //退出登录
export const GET_USERINFOR='GET_USERINFOR'//拿到用户信息


   
export default {
    state:{
        user:sessionStorage.getItem('user') ? JSON.parse(sessionStorage.getItem('user')):{},
        token:sessionStorage.getItem('token')
    },
    mutations: {
        [USER_SIGNIN](state, token) {
            state.token=token;
            sessionStorage.setItem('token', token)
        },
        [USER_SIGNOUT](state) {
            state.token=null;
            state.user={};
            sessionStorage.removeItem('token')
            sessionStorage.removeItem('user')
        },
        [GET_USERINFOR](state,user){
            Object.assign(state.user, user)
            sessionStorage.setItem('user',JSON.stringify(user))
        }
    },
    actions: {
         // 邮箱登录
        [USER_SIGNIN]({ commit }, userInfo) {
          const id = userInfo.id.trim();
          return new Promise((resolve, reject) => {
            loginByEmail(id, userInfo.password).then(response => {
              const data = response.data;
              commit(USER_SIGNIN, data);
              resolve();
            }).catch(error => {
              reject(error);
            });
          });
        },
        // 获取用户信息
        [GET_USERINFOR]({ commit, state }) {
          return new Promise((resolve, reject) => {
            getInfo().then(response => {
              const data = response.data;
              commit(GET_USERINFOR, data);
              resolve(response);
            }).catch(error => {
              reject(error);
            });
          });
        },
        [USER_SIGNOUT]({commit}) {
            commit(USER_SIGNOUT)
        }
    }
}