const baseUrl = "http://localhost:3001";

const response = (res) => {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
};

const headers = {
  "Content-Type": "application/json",
};

function getItems() {
  return fetch(`${baseUrl}/items`).then(response);
}

function addItems(name, imageUrl, weather) {
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({
      name,
      imageUrl,
      weather,
    }),
  }).then(response);
}

function deleteItems(_id) {
  return fetch(`${baseUrl}/items/${_id}`, {
    method: "DELETE",
    headers: headers,
  }).then(response);
}

export { getItems, addItems, deleteItems };

//json-server --watch db.json --id _id --port 3001
