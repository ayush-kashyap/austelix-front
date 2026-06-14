import { createSlice } from "@reduxjs/toolkit";


const projectSlice = createSlice({
  name: "project",
  initialState: {
    activeProjectId: "",
    projectName:"",
    projectBackendAPI:"",

  },
  reducers: {
    setActiveProjectId(state, action) {
      state.activeProjectId = action.payload;
    },
    setActiveProjectName(state,action) {
      state.projectName = action.payload;
    },
    setActiveProjectAPI(state,action) {
      state.projectBackendAPI = action.payload;
    }
  },
});

export const {
  setActiveProjectId,
  setActiveProjectAPI,
  setActiveProjectName
} = projectSlice.actions;

export default projectSlice.reducer;
