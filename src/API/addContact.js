/* eslint-disable camelcase */
/* eslint-disable no-alert */

import axiosClient from '.';

const addContact = () => {
  const first_name = prompt('Введите имя');
  const last_name = prompt('Введите фамилию');
  const phone_number = prompt('Введите номер мобилки');
  return axiosClient.post(
    'http://127.0.0.1:5432/contacts-add',
    {
      first_name,
      last_name,
      phone_number,
    },
  ).then((response) => {
    if (response.status === 400) {
      throw new Error(response.data.message);
    }
    return response.data;
  });
};

export default addContact;
