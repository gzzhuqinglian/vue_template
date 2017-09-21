import fetch from 'utils/fetch';

export function loginByEmail(id, password) {
  const data = {
    id,
    password
  };
  return fetch({
    url: '/login/loginbyemail',
    method: 'post',
    data
  });
}


export function getInfo() {
  return fetch({
    url: '/user/info',
    method: 'get'
  });
}

