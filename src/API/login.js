const signIn = (login, password) => fetch(
  'http://127.0.0.1:5432/login',
  {
    method: 'POST',
    body: JSON.stringify({ login, password }),
  },
).then((response) => response
  .json()
  .then((data) => {
    if (response.status === 401) {
      throw new Error(data.message);
    }
    localStorage.setItem('token', data.token);
    // const token = localStorage.getItem('token');
    // if (token) {
    //   navigate('/main');
    // }
  }))
  .catch((e) => {
    alert(e.message);
  });

export default signIn;
