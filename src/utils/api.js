const api = {
  baseUrl: "https://around-api.pt-br.tripleten-services.com/v1",
  headers: {
    authorization: "437f8561-72d0-4eae-8fce-fe37093ae3b9",
    "Content-Type": "application/json",
  },

  _check(res) {
    return res.ok ? res.json() : Promise.reject(`Erro: ${res.status}`);
  },

  getUserInfo() {
    return fetch(`${this.baseUrl}/users/me`, { headers: this.headers }).then(this._check);
  },

  getInitialCards() {
    return fetch(`${this.baseUrl}/cards`, { headers: this.headers }).then(this._check);
  },

  addNewCard(data) {
    return fetch(`${this.baseUrl}/cards`, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify(data),
    }).then(this._check);
  },

  editUserInfo(data) {
    return fetch(`${this.baseUrl}/users/me`, {
      method: "PATCH",
      headers: this.headers,
      body: JSON.stringify(data),
    }).then(this._check);
  },

  updateAvatar(avatar) {
    return fetch(`${this.baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: this.headers,
      body: JSON.stringify({ avatar }),
    }).then(this._check);
  },

  likeCard(id) {
    return fetch(`${this.baseUrl}/cards/${id}/likes`, {
      method: "PUT",
      headers: this.headers,
    }).then(this._check);
  },

  unlikeCard(id) {
    return fetch(`${this.baseUrl}/cards/${id}/likes`, {
      method: "DELETE",
      headers: this.headers,
    }).then(this._check);
  },

  deleteCard(id) {
    return fetch(`${this.baseUrl}/cards/${id}`, {
      method: "DELETE",
      headers: this.headers,
    }).then(this._check);
  },
};

export default api;