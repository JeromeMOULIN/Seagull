import { configureStore } from "@reduxjs/toolkit";
import headerSlice from "./slice/headerSlice";
import modalSlice from "./slice/modalSlice";
export const store = configureStore({
  reducer: {
    currentPage: headerSlice,
    isOpen: modalSlice,
  },
});
