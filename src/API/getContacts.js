import axiosClient from '.';

const getContacts = () => axiosClient.get(
  'http://127.0.0.1:5432/contacts',
)
  .then((response) => response.data)
  .catch((error) => {
    console.error(error.message);
  });

export default getContacts;
