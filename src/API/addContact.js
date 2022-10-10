/* eslint-disable camelcase */
/* eslint-disable no-alert */

const addContact = () => {
  const first_name = prompt('Введите имя');
  const last_name = prompt('Введите фамилию');
  const phone_number = prompt('Введите номер мобилки');
  const token = localStorage.getItem('token');
  return fetch('http://127.0.0.1:5432/contacts-add', {
    method: 'POST',
    headers: { Authorization: token },
    body: JSON.stringify({
      first_name,
      last_name,
      phone_number,
    }),
  }).then((response) => {
    response
      .json()
      .then((data) => {
        if (response.status === 400) {
          throw new Error(data.message);
        }
        return response.data;
      })
      .catch((e) => {
        alert(e.message);
      });
  })
    .catch(console.log);
};
export default addContact;
