import { flats } from './utils';

const response = {
  200: { ok: true, status: 200, statusText: 'OK' },
  201: { ok: true, status: 201, statusText: 'Created' },
  204: { ok: true, status: 204, statusText: 'No content' },
  400: {
    ok: false,
    status: 400,
    statusText: 'Bad request',
  },
};

const serverDelay = 1000;

class PseudoResponse {
  delay = serverDelay;
  constructor({ ok, status, statusText }, object = {}) {
    this._object = object;
    this.ok = ok;
    this.status = status;
    this.statusText = statusText;
    if (this.ok) {
      this.json = this._json;
    }
  }

  _json() {
    return new Promise((resolve) => {
      setTimeout(() => resolve(this._object), this.delay);
    });
  }
}

export default function fetch(url, options) {
  let path = url.split('/');

  const [resource, attribute, id] = path.slice(path.indexOf('v1') + 1);
  let result;

  switch (resource) {
    case 'flats': {
      if (attribute === undefined) {
        result = new PseudoResponse(response[200], { response: flats });
      }

      if (attribute === 'likes') {
        if (options.method === 'PUT') {
          result = new PseudoResponse(response[201], {
            response: { id: id, liked: true },
          });
        }
        if (options.method === 'DELETE') {
          result = new PseudoResponse(response[204], {
            response: { id: id, liked: false },
          });
        }
      }

      break;
    }
    default: {
      break;
    }
  }

  if (!result) {
    result = new PseudoResponse(response[400]);
  }

  return new Promise((resolve) => {
    setTimeout(() => resolve(result), serverDelay);
  });
}
