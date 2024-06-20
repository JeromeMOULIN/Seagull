import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: any = [
  {
    text: "HOME",
  },
];

const currentPageSlice = createSlice({
  name: "currentPage",
  initialState,
  reducers: {
    changeName: (state, action: PayloadAction<any>) => {
      state.text = action.payload;
    },
  },
});

export const { changeName } = currentPageSlice.actions;
export default currentPageSlice.reducer;
