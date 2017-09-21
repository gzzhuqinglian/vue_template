import Mock from 'mockjs';
import loginAPI from './login';



// 登录相关
Mock.mock(/\/login\/loginbyemail/, 'post', loginAPI.loginByEmail);
Mock.mock(/\/user\/info\.*/, 'get', loginAPI.getInfo)




export default Mock;
