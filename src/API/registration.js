/* eslint-disable no-alert */
import axiosClient from '.';

const signUp = (login, password) => axiosClient.post(
  'http://127.0.0.1:5432/add-user',
  { login, password },
).then(
  (response) => {
    if (response.data.message) {
      alert('This username is already taken');
      throw new Error(response.data.message);
    }
    alert('You have been registered successfuly');
    return response.data;
  },
);

export default signUp;
