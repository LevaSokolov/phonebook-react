import axiosClient from '.';

const contactDelete = (id) => axiosClient.delete(
  'http://127.0.0.1:5432/contacts',
  {
    data: {
      contactId: id,
    },
  },
).catch((error) => {
  console.error(error.message);
});

export default contactDelete;
