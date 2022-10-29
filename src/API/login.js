import axiosClient from '.';

const signIn = (login, password) => axiosClient.post(
  'http://127.0.0.1:5432/login',
  { login, password },
).then(
  (response) => {
    if (response.status === 401) {
      throw new Error(response.data.message);
    }
    localStorage.setItem('token', response.data.token);
    return response.data;
  },
).catch((e) => {
  console.error(e.message);
});

export default signIn;
