import axios from "axios";
const API_BASE_URL = import.meta.env.VITE_BACKEND

export const addAddress = async (token, form) => {
  try {
    const res = await axios.post(`${API_BASE_URL}/api/address`, form, {
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

export const getAddress = async (token) => {
  try {
    const res = await axios.get(`${API_BASE_URL}/api/address`, {
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

export const changeAddressId = async (token, addressId) => {
  try {
    const res = await axios.post(
      `${API_BASE_URL}/api/changeaddress`,
      { addressId },
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

export const addCart = async (token, productId) => {
  try {
    const res = await axios.post(
      `${API_BASE_URL}/api/addCart`,
      { productId },
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

export const reduceCart = async (token, productId) => {
  try {
    const res = await axios.post(
      `${API_BASE_URL}/api/reduceCart`,
      { productId },
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

export const getCart = async (token) => {
  try {
    const res = await axios.get(`${API_BASE_URL}/api/cart`, {
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
export const updateStock = async (token) => {
  try {
    const res = await axios.post(
      `${API_BASE_URL}/api/updatestock`,
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

export const clearCart = async (token) => {
  try {
    const res = await axios.delete(`${API_BASE_URL}/api/cart`, {
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

export const getOrderBy = async (token) => {
  try {
    const res = await axios.get(`${API_BASE_URL}/api/orderby`, {
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
