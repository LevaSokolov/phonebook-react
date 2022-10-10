function contactDelete(id) {
  const token = localStorage.getItem('token');
  return fetch('http://127.0.0.1:5432/contacts', {
    method: 'DELETE',
    headers: { Authorization: token },
    body: JSON.stringify({
      contactId: id,
    }),
  });
}

export default contactDelete;
