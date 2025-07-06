import axios from "axios";
export const login = async (data) => {
  try {
    const res = await axios.post("https://e-commerce-project-backend-mu.vercel.app/api/login", data);
    return res;
  } catch (err) {
    console.log(err);
    return err.response;
  }
};

export const register = async (data) => {
  try {
    const res = await axios.post("https://e-commerce-project-backend-mu.vercel.app/api/register", data);
    return res;
  } catch (err) {
    console.log(err);
    return err.response;
  }
};

export const checkRole = async (token) => {
  try {
    const res = await axios.post(
      "https://e-commerce-project-backend-mu.vercel.app/api/checkrole",
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
