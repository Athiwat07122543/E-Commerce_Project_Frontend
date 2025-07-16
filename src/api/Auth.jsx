import axios from "axios";
const API_BASE_URL = process.env.VITE_BACKEND

export const login = async (data) => {
  try {
    const res = await axios.post(`${API_BASE_URL}//api/login`, data);
    return res;
  } catch (err) {
    console.log(err);
    return err.response;
  }
};

export const register = async (data) => {
  try {
    const res = await axios.post(`${API_BASE_URL}//api/register`, data);
    return res;
  } catch (err) {
    console.log(err);
    return err.response;
  }
};

export const checkRole = async (token) => {
  try {
    const res = await axios.post(
      `${API_BASE_URL}/api/checkrole`,
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
