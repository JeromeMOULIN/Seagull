import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  isOpen: false,
};

const modalSlice = createSlice({
  name: "isOpen",
  initialState,
  reducers: {
    switchStatue: (state, action: PayloadAction<any>) => {
      state.isOpen = action.payload;
    },
  },
});

export const { switchStatue } = modalSlice.actions;
export default modalSlice.reducer;
