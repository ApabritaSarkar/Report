import axios from "axios";

const authToken = localStorage.getItem("authToken");

axios.defaults.baseURL = "http://localhost:5000";
if (authToken) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${authToken}`;
}

export default axios;
