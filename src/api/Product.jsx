import axios from "axios";

export const listProduct = async (count) => {
  try {
    const res = await axios.post(
      "https://e-commerce-project-backend-mu.vercel.app/api/listproduct",
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
    const res = await axios.post("https://e-commerce-project-backend-mu.vercel.app/api/filters", data);
    return res;
  } catch (err) {
    console.log(err);
    return err.response;
  }
};

export const createProduct = async (token, data) => {
  try {
    const res = await axios.post(
      "https://e-commerce-project-backend-mu.vercel.app/api/createproduct",
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
      "https://e-commerce-project-backend-mu.vercel.app/api/editproduct/" + id,
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
      "https://e-commerce-project-backend-mu.vercel.app/api/deleteproduct/" + id,
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
    const res = await axios.post("https://e-commerce-project-backend-mu.vercel.app/api/upload", data);
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
      "https://e-commerce-project-backend-mu.vercel.app/api/deleteproductimageby/" + id,
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
