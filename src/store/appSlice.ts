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
  projects: any[];
  technologies: string[];
  activeChip: string;
  showDrawer: boolean;
  isNavSticky: boolean;
}

const initialState: CounterState = {
  status: "idle",
  projects: [],
  technologies: [],
  activeChip: "All",
  showDrawer: false,
  isNavSticky: false,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setActiveChip: (state, action: PayloadAction<string>) => {
      state.activeChip = action.payload;
    },
    showDrawer: (state, action: PayloadAction<boolean>) => {
      state.showDrawer = action.payload;
    },
    setIsNavSticky: (state, action: PayloadAction<boolean>) => {
      state.isNavSticky = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProjects.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(getProjects.fulfilled, (state, action) => {
      state.status = "fulfilled";
      state.projects = action.payload;

      let technologies: Set<string> = new Set([]);

      interface Project {
        technologies: string[];
      }

      action.payload.forEach((project: Project) => {
        const set: Set<string> = new Set(project.technologies);
        technologies = new Set([...technologies, ...set]);
      });

      state.technologies = Array.from(technologies);
    });
    builder.addCase(getProjects.rejected, (state) => {
      state.status = "failed";
    });
  },
});

export const { setActiveChip, showDrawer, setIsNavSticky } = appSlice.actions;

export default appSlice.reducer;
