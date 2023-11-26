import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  orders: null,
  loading: false,
  error: null,
};

const orderSlice = createSlice({
  name: "orders",
  initialState: INITIAL_STATE,
  reducers: {
    createOrderFail: (state = INITIAL_STATE, action) => {
      return {
        ...state,

        error: action.payload,
      };
    },
    fetchOrderSuccess: (state = INITIAL_STATE, action) => {
      return {
        ...state,
        loading: false,
        error: null,
        orders: [...action.payload],
      };
    },
    fetchOrderFail: (state = INITIAL_STATE, action) => {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    },
    fetchOrderStart: (state = INITIAL_STATE) => {
      return {
        ...state,
        loading: true,
      };
    },
    clearError: (state = INITIAL_STATE) => {
      return {
        ...state,
        error: null,
      };
    },
    clearOrder: (state = INITIAL_STATE) => {
      return {
        ...state,
        orders: null,
      };
    },
  },
});

export const {
  createOrderFail,
  fetchOrderStart,
  fetchOrderSuccess,
  fetchOrderFail,
  clearError,
  clearOrder,
} = orderSlice.actions;
export default orderSlice.reducer;
