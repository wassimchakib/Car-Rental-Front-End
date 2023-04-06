export default class API {
  static login = async (username) => {
    const API_URL = 'http://localhost:1800/login';
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username }),
    };
    return fetch(API_URL, requestOptions)
      .then((response) => response.json())
      .then((result) => result);
  }
}
