import axios from "axios";

axios.defaults.baseURL = "https://mern-shopping-list-app.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "application/json";
