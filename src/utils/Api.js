import FileSaver from 'file-saver'

class Api {
  constructor(options) {
    this._version = options.version
    this._headers = options.headers
    this._baseUrl = `${options.baseUrl}/api/${this._version}`
  }

  _getJson(res) {
    if (res.ok) {
      return res.json()
    }
    return res.json().then(err => Promise.reject(err))
  }

  _getParams(options) {
    let params = '?'

    params += Object.keys(options)
      .map(key => {
        if (Array.isArray(options[key])) {
          return options[key].map(item => `${key}=${item}`).join('&')
        } else {
          return `${key}=${options[key]}`
        }
      })
      .join('&')

    return params
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
      headers: {
        'Content-Type': 'application/json',
      }
    })
  }

  getShops() {
    return this._request(`${this._baseUrl}/shops`, {
      method: 'GET',
      headers: this._headers,
    })
  }

  getProducts() {
    return this._request(`${this._baseUrl}/product`, {
      method: 'GET',
      headers: this._headers,
    })
  }

  getForecast(options = {}) {
    const url = `${this._baseUrl}/forecast${this._getParams(options)}`

    return this._request(url, {
      method: 'GET',
      headers: this._headers,
    })
  }

  getStats(options = {}) {
    const url = `${this._baseUrl}/statistics${this._getParams(options)}`

    return this._request(url, {
      method: 'GET',
      headers: this._headers,
    })
  }

  getExcel(type = '', options = {}) {
    if (!type) throw new Error('Type is required')
    const url = `${
      this._baseUrl
    }/${type}/excel_${type}_download${this._getParams(options)}`

    return fetch(url, {
      method: 'GET',
      headers: {
        ...this._headers,
        'Content-Type': 'application/vnd.ms-excel',
      },
    })
      .then(res => res.blob())
      .then(blob => FileSaver.saveAs(blob, `${type}.xlsx`))
      .catch(err => console.log(err))
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
