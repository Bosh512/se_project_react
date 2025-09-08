import React from "react";
import { Navigate } from "react-router-dom";
import { baseUrl, handleResponse } from "./api";

function ProtectedRoute({ currentUser, children }) {
  if (!currentUser.isLoggedIn) {
    return <Navigate to="/" replace />;
  } else {
    return children;
  }
}

function registration(data) {
  return fetch(`${baseUrl}/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  }).then(handleResponse);
}

function authorization(data) {
  return fetch(`${baseUrl}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then(handleResponse);
}

function getUserInfo(token) {
  return fetch(`${baseUrl}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then(handleResponse);
}

function updateUserInfo(data, token) {
  return fetch(`${baseUrl}/users/me`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  }).then(handleResponse);
}

export {
  registration,
  authorization,
  getUserInfo,
  updateUserInfo,
  ProtectedRoute,
};
