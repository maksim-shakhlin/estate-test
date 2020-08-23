import fetch from './pseudoServer';

const apiOptions = {
  baseUrl: 'https://estate.ru/api/v1',
  headers: {
    authorization: "let's suppose we already have token",
    'Content-Type': 'application/json',
  },
};

class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  _request(tag, method, body) {
    if (!method) {
      method = 'GET';
    }
    const options = { method: method, headers: this._headers };
    if (body) {
      Object.assign(options, { body: JSON.stringify(body) });
    }
    return fetch(this._baseUrl + tag, options).then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        return Promise.reject(
          new Error(`Ошибка: ${response.status} (${response.statusText})`)
        );
      }
    });
  }

  getFlats() {
    return this._request('/flats');
  }

  setFlatLikedStatus(flatId, status) {
    if (status) {
      return this._request(`/flats/likes/${flatId}`, 'PUT');
    } else {
      return this._request(`/flats/likes/${flatId}`, 'DELETE');
    }
  }
}

const api = new Api(apiOptions);

export default api;
