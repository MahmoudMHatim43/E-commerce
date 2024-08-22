import { configureStore } from "@reduxjs/toolkit";
// place holder to avoid redux errors requiring a valid reducer
const tempReducer = (state = {}, action) => {
  return state;
};
export const store = configureStore({
  reducer: {
    temp: tempReducer,
  },
});
