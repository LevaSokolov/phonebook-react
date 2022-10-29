import axiosClient from '.';

const getContacts = () => axiosClient.get(
  'http://127.0.0.1:5432/contacts',
)
  .then((response) => response.data);

export default getContacts;
