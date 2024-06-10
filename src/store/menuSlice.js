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
    open(state){
      state.sideBarVisibility = true;
    }
  },
});

export const { toggle,close, open } = menuSlice.actions;
export default menuSlice.reducer;
