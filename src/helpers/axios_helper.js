import axios from "axios";

export const getAuthToken = () => {
  return localStorage.getItem("auth_token");
};

export const setAuthHeader = (token) => {
  localStorage.setItem("auth_token", token);
};

// axios.defaults.baseURL = "https://sandro-auth-app.azurewebsites.net";
axios.defaults.baseURL = "http://localhost:8080";
axios.defaults.headers.post["Content-Type"] = "application/json";

export const request = (method, url, data) => {
  let headers = {};
  if (getAuthToken() !== null && getAuthToken() !== "null") {
    headers = {
      Authorization: `Bearer ${getAuthToken()}`,
    };
  }

  if (data && data.file) {
    const formData = new FormData();
    formData.append("file", data.file);

    if (data.name) {
      formData.append("name", data.name);
    }

    if (data.bio) {
      formData.append("bio", data.bio);
    }

    if (data.number) {
      formData.append("number", data.number);
    }

    return axios({
      method: method,
      url: url,
      headers: {
        ...headers,
        "Content-Type": "multipart/form-data",
      },
      data: formData,
    });
  } else {
    return axios({
      method: method,
      url: url,
      headers: headers,
      data: data,
    });
  }
};
