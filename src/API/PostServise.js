import axios from 'axios';

class PostServise {
  static async getAll() {
    const token = localStorage.getItem('token');
    const response = await axios
      .get('http://127.0.0.1:5432/contacts', {
        headers: {
          authorization: token,
        },
      })
      .catch(console.log);
    return response.data;
  }
}

export default PostServise;
