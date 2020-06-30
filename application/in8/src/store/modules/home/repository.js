import ENVIROMENT_SETUP from "../../../config/API";

export const contacts = async () => {
  const API = ENVIROMENT_SETUP();
  return new Promise((resolve, reject) => {
    API.get(`/contacts`)
      .then(data => {
        resolve(data);
      })
      .catch(err => {
        reject(err);
      });
  });
};

export const postContact = async data => {
  const API = ENVIROMENT_SETUP();
  return new Promise((resolve, reject) => {
    API.post(`/contacts`, data)
      .then(response => {
        resolve(response);
      })
      .catch(err => {
        reject(err);
      });
  });
};
