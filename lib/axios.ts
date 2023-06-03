import axios from "axios";


const BASE_URL = "/api";

 axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
