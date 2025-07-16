import axios from "axios";
const API_BASE_URL = import.meta.env.VITE_BACKEND

export const listProduct = async (count) => {
  try {
    const res = await axios.post(
      `${API_BASE_URL}/api/listproduct`,
      count
    );

    return res;
  } catch (err) {
    console.log(err);
    return err.response;
  }
};

export const filters = async (data) => {
  try {
    const res = await axios.post(`${API_BASE_URL}/api/filters`, data);
    return res;
  } catch (err) {
    console.log(err);
    return err.response;
  }
};

export const createProduct = async (token, data) => {
  try {
    const res = await axios.post(
      `${API_BASE_URL}/api/createproduct`,
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return res;
  } catch (err) {
    console.log(err);
    return err.response;
  }
};

export const editProduct = async (token, id, data) => {
  try {
    const res = await axios.put(
      `${API_BASE_URL}/api/editproduct/` + id,
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return res;
  } catch (err) {
    console.log(err);
    return err.response;
  }
};

export const deleteProduct = async (token, id) => {
  try {
    const res = await axios.delete(
      `${API_BASE_URL}/api/deleteproduct/` + id,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return res;
  } catch (err) {
    console.log(err);
    return err.response;
  }
};

export const upload = async (data) => {
  try {
    const res = await axios.post(`${API_BASE_URL}/api/upload`, data);
    console.log("api", res);
    return;
  } catch (err) {
    console.log(err);
    return err.response;
  }
};

export const deleteProductImageBy = async (token, id, nameImage) => {
  try {
    const res = await axios.post(
      `${API_BASE_URL}/api/deleteproductimageby/` + id,
      nameImage,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  } catch (err) {
    console.log(err);
    return err.response;
  }
};
