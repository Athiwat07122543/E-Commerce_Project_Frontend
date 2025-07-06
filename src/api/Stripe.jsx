import axios from "axios";

export const checkOut = async (token, data) => {
  try {
    const res = await axios.post("https://e-commerce-project-backend-mu.vercel.app/api/checkout", data, {
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
