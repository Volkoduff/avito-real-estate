import {Method} from './utils';

const checkStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    throw new Error(`${response.status}: ${response.statusText}`);
  }
};

const toJSON = (response) => {
  return response.json();
};

export default class API {
  constructor({endPoint}) {
    this._endPoint = endPoint;
  }

  getList() {
    return this._load({url: ``})
      .then(toJSON)
  }

  getDetailedInfo(id) {
    return this._load({url: `${id}`})
      .then(toJSON)
  }

  _load({url, method = Method.GET, body = null, headers = new Headers()}) {
    return fetch(`${this._endPoint}/${url}`, {method, body, headers})
      .then(checkStatus)
      .catch((err) => {
        throw err;
      });
  }
}
