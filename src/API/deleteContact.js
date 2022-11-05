import axiosClient from '.';

const deleteContact = (id) => axiosClient.delete(
  'http://127.0.0.1:5432/contacts',
  {
    data: {
      contactId: id,
    },
  },
);

export default deleteContact;
