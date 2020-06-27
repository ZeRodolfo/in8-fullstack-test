import axios from "axios";

const ENVIROMENT_SETUP = () => {
  const api = axios.create({
    baseURL: "http://localhost:8000",
  });

  return api;
};

export default ENVIROMENT_SETUP;
