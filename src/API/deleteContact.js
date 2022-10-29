import axiosClient from '.';

const contactDelete = (id) => axiosClient.delete(
  'http://127.0.0.1:5432/contacts',
  {
    data: {
      contactId: id,
    },
  },
);

export default contactDelete;
