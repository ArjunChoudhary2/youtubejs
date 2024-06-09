import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
  name: "menu",
  initialState: {
    sideBarVisibility: true,
    video : {}
  },
  reducers: {
    toggle(state) {
      state.sideBarVisibility = !state.sideBarVisibility;
    },
    close(state){
      state.sideBarVisibility = false;
    },
  },
});

export const { toggle,close } = menuSlice.actions;
export default menuSlice.reducer;
