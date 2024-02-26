import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  currency: "JOD",
  name: "jordanian Dinar",
  symbol: "JOD",
  currencyValue: 1,
};

export const currencyReducer = createReducer(initialState, {
  currencyChange: (state, action) => {
    state.currency = action.payload.currency;
    state.name = action.payload.name;
    state.symbol = action.payload.symbol;
    state.currencyValue = action.payload.value;
  },
});
