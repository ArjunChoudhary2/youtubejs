import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
  name: "menu",
  initialState: {
    sideBarVisibility: true,
  },
  reducers: {
    toggle(state) {
      state.sideBarVisibility = !state.sideBarVisibility;
    },
  },
});

export const { toggle } = menuSlice.actions;
export default menuSlice.reducer;
