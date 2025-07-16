import axios from "axios";
const API_BASE_URL = process.env.VITE_BACKEND

export const listUser = async (token) => {
  try {
    const res = await axios.get(`${API_BASE_URL}/api/listuser`, {
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

export const editUser = async (token, id, data) => {
  try {
    const res = await axios.put(
      `${API_BASE_URL}/api/edituser/` + id,
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

export const getOrders = async (token, page, limit, status) => {
  try {
    const res = await axios.get(`${API_BASE_URL}/api/orders`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        page,
        limit,
        status,
      },
    });
    return res;
  } catch (err) {
    console.log(err);
    return err.response;
  }
};

export const updateOrder = async (token, order) => {
  try {
    const res = await axios.put(`${API_BASE_URL}/api/order`, order, {
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

export const ordersToDay = async (token) => {
  try {
    const res = await axios.get(`${API_BASE_URL}/api/order`, {
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

export const getOrdersMonthlySales = async (token) => {
  try {
    const res = await axios.get(`${API_BASE_URL}/api/ordersmonthly"`, {
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

export const getTotalSalesToDay = async (token) => {
  try {
    const res = await axios.get(`${API_BASE_URL}/api/totalsalestoday`, {
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
