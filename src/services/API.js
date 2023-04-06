export default class API {
  static login = async (username) => {
    const API_URL = 'localhost:3000/login';
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username }),
    };
    fetch(API_URL, requestOptions)
      .then((response) => response.json());
  }
}
