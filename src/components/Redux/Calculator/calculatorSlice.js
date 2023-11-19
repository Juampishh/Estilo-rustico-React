import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  hiddenModal: true,
};

const calculatorSlice = createSlice({
  name: "calculator",
  initialState: INITIAL_STATE,
  reducers: {
    toggleModal: (state) => {
      state.hiddenModal = !state.hiddenModal;
    },
  },
});

export const { toggleModal } = calculatorSlice.actions;

// Selector para acceder al estado de la calculadora
export const selectModalHidden = (state) => state.calculator.hiddenModal;

export default calculatorSlice.reducer;
