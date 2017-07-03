// @flow
/* globals FormData */
import fetch from 'isomorphic-fetch';

var SETTINGS = window.SETTINGS;

export function ServerError(message: ?string) {
  this.name = 'ServerError';
  this.message = message || 'Internal server error';
  this.stack = new Error().stack;
}
ServerError.prototype = Object.create(Error.prototype);
ServerError.prototype.constructor = ServerError;

function maybeThrowApiError(response) {
  if (response.status === 204) {
    return {};
  } else if (response.status !== 200 && response.status !== 201) {
    return response.text().then(text => {
      throw new ServerError(text);
    });
  }
}

export class Client {
  apiUrl: string;

  constructor() {
    //this.apiUrl = SETTINGS.SERVER_URL;
  }

  getOrders() {
    return Promise.resolve({
      data: [{ id: '1', name: 'test data' }, { id: '2', name: 'test data 2' }],
    });
    /*
    return fetch(url, {
      method: 'GET',
      headers: {
        'Authorization': `JWT ${this.token}`
      }
    }).then(response => {
      return maybeThrowApiError(response) || response.json().then(data => {
        return {
          data
        };
      });
    });
    */
  }
}
