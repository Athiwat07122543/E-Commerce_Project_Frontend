import axios from "axios";

export const listUser = async (token) => {
  try {
    const res = await axios.get("https://e-commerce-project-backend-mu.vercel.app/api/listuser", {
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
      "https://e-commerce-project-backend-mu.vercel.app/api/edituser/" + id,
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
    const res = await axios.get(`https://e-commerce-project-backend-mu.vercel.app/api/orders`, {
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
    const res = await axios.put("https://e-commerce-project-backend-mu.vercel.app/api/order", order, {
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
    const res = await axios.get("https://e-commerce-project-backend-mu.vercel.app/api/order", {
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
    const res = await axios.get("https://e-commerce-project-backend-mu.vercel.app/api/ordersmonthly", {
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
    const res = await axios.get("https://e-commerce-project-backend-mu.vercel.app/api/totalsalestoday", {
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
