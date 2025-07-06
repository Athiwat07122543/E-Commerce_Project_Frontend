import axios from "axios";

export const addCategory = async (token, data) => {
  try {
    const res = await axios.post(
      "https://e-commerce-project-backend-mu.vercel.app/api/createcategory",
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
    const res = await axios.get("https://e-commerce-project-backend-mu.vercel.app/api/getcategory");
    return res;
  } catch (err) {
    console.log(err);
    return err.response;
  }
};

export const editCategory = async (token, id, data) => {
  try {
    const res = await axios.put(
      "https://e-commerce-project-backend-mu.vercel.app/api/editcategory/" + id,
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
      "https://e-commerce-project-backend-mu.vercel.app/api/deletecategory/" + id,
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
