const signUp = (login, password) => fetch(
  'http://127.0.0.1:5432/add-user',
  {
    method: 'POST',
    body: JSON.stringify({
      login,
      password,
    }),
  },
).then((response) => response
  .json().then((data) => {
    if (data.message) {
      alert('This username is already taken');
      return;
    }
    alert('You have been registered successfuly');
  })).catch((e) => {
  console.error(e.message);
});

export default signUp;
