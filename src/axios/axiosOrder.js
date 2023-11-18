import { BASE_URL } from "../utils/constants";

export const getOrders = async (dispatch, currentUser) => {
  dispatch(fetchOrderStart());
  try {
    const orders = await axios.get(`${BASE_URL}/orders`, {
      headers: {
        "x-token": currentUser.token,
      },
    });
    console.log(orders);
    if (orders) {
      dispatch(fetchOrderSuccess(orders.data.data));
    }
  } catch (error) {
    console.log(error);
    dispatch(fetchOrderError("Error al obtener las ordenes"));
  }
};
