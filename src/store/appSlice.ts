import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import axios from "axios";

export const getProjects = createAsyncThunk(
  "projects/getProjects",
  async () => {
    const response = await axios.get(
      "https://renras.github.io/personal-api/personal-projects.json"
    );
    return response.data;
  }
);

interface CounterState {
  status: string;
  projects: Object;
}

const initialState: CounterState = {
  status: "idle",
  projects: {},
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProjects.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(getProjects.fulfilled, (state, action) => {
      state.status = "fulfilled";
      state.projects = action.payload;
      console.log(state.projects);
    });
    builder.addCase(getProjects.rejected, (state) => {
      state.status = "failed";
    });
  },
});

export const {} = appSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.app.value;

export default appSlice.reducer;
