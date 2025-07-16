import axios from "axios";
const API_BASE_URL = import.meta.env.VITE_BACKEND

export const addCategory = async (token, data) => {
  try {
    const res = await axios.post(
      `${API_BASE_URL}/api/createcategory`,
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

export const listCategory = async () => {
  try {
    const res = await axios.get(`${API_BASE_URL}/api/getcategory`);
    return res;
  } catch (err) {
    console.log(err);
    return err.response;
  }
};

export const editCategory = async (token, id, data) => {
  try {
    const res = await axios.put(
      `${API_BASE_URL}/api/editcategory/` + id,
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

export const deleteCategory = async (token, id) => {
  try {
    const res = await axios.delete(
      `${API_BASE_URL}/api/deletecategory/` + id,
      {},
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
