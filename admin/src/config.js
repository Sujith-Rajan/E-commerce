import axios from "axios";

export const BASE_URL = "http://localhost:5000/api";

const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.token;

export const PUBLIC_REQUEST = axios.create({
    baseURL: BASE_URL,
});
export const USER_REQUEST = axios.create({
    baseURL: BASE_URL,
    headers: { token: `Bearer ${TOKEN}` },
});
