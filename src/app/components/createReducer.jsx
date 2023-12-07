import { createSlice } from "@reduxjs/toolkit";
import { getCoins } from "./action";

const initialState = {
  data: [],
  error: null,
  status: "idle",
};

const createReducer = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCoins.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getCoins.fulfilled, (state, action) => {
        state.status = "success";
        state.data = action.payload;
      })

      .addCase(getCoins.rejected, (state, action) => {
        state.status = "errpr";
        state.error = action.payload;
      });
  },
});

export default createReducer;
