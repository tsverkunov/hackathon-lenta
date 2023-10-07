class Api {
  constructor(options) {
    this._version = options.version
    this._headers = options.headers
    this._baseUrl = `${options.baseUrl}/api/${options.version}`
  }

  _getJson(res) {
    if (res.ok) {
      return res.json()
    }
    return res.json().then(err => Promise.reject(err))
  }

  _request(url, options) {
    return fetch(url, options).then(this._getJson)
  }

  // API methods

  login(email, password) {
    return this._request(`${this._baseUrl}/auth/token/login`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({ email, password }),
    })
  }

  logout() {
    return this._request(`${this._baseUrl}/auth/token/logout`, {
      method: 'POST',
      headers: this._headers,
    })
  }

  getShops() {
    return this._request(`${this._baseUrl}/shops`, {
      method: 'GET',
      headers: this._headers,
    })
  }

  getForecast(dateBefore, dateAfter) {
    const url = `${this._baseUrl}/forecast${
      dateBefore ? `?date_before=${dateBefore}` : ''
    }${dateAfter ? `&date_after=${dateAfter}` : ''}`

    return this._request(url, {
      method: 'GET',
      headers: this._headers,
    })
  }
}

const token = localStorage.getItem('token')
  ? `token ${localStorage.getItem('token')}`
  : ''

export default new Api({
  baseUrl: 'http://localhost:8000', // Change to production URL
  version: 'v1',
  headers: {
    Authorization: token,
    'Content-Type': 'application/json',
  },
})
