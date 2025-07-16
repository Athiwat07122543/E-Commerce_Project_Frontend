import axios from "axios";
const API_BASE_URL = process.env.VITE_BACKEND

export const checkOut = async (token, data) => {
  try {
    const res = await axios.post(`${API_BASE_URL}/api/checkout`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res;
  } catch (err) {
    console.log(err);
    return err.response;
  }
};
