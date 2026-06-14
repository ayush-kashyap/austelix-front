import { createSlice } from "@reduxjs/toolkit";

const authorsSlice = createSlice({
  name: "authors",
  initialState: { items: [] },
  reducers: {
    setAuthors(state, action) {
      state.items = action.payload;
    },
  },
});

export const { setAuthors } = authorsSlice.actions;
export default authorsSlice.reducer;
export const selectAllAuthors = (state) => state.authors.items;
