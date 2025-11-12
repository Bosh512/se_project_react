import { getToken } from "../utils/token";

// const baseUrl = "http://localhost:3001";

const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://api.wtwrbosh512.jumpingcrab.com"
    : "http://localhost:3001";

const handleResponse = (res) => {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
};

const headers = {
  "Content-Type": "application/json",
};

function getItems() {
  const token = getToken();
  return fetch(`${baseUrl}/items`, {
    method: "GET",
    headers: headers,
  }).then(handleResponse);
}

function addItems(name, imageUrl, weather) {
  const token = getToken();
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: { ...headers, Authorization: `Bearer ${token}` },
    body: JSON.stringify({
      name,
      imageUrl,
      weather,
    }),
  }).then(handleResponse);
}

function deleteItems(_id) {
  const token = getToken();
  return fetch(`${baseUrl}/items/${_id}`, {
    method: "DELETE",
    headers: { ...headers, Authorization: `Bearer ${token}` },
  }).then(handleResponse);
}

function addCardLike(_id) {
  const token = getToken();
  return fetch(`${baseUrl}/items/${_id}/likes`, {
    method: "PUT",
    headers: { ...headers, Authorization: `Bearer ${token}` },
  }).then(handleResponse);
}

function removeCardLike(_id) {
  const token = getToken();
  return fetch(`${baseUrl}/items/${_id}/likes`, {
    method: "DELETE",
    headers: { ...headers, Authorization: `Bearer ${token}` },
  }).then(handleResponse);
}

export {
  getItems,
  addItems,
  deleteItems,
  baseUrl,
  addCardLike,
  removeCardLike,
  handleResponse,
};

//json-server --watch db.json --id _id --port 3001

//changed to port 3000
