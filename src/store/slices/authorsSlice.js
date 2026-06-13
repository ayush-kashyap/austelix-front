import { createSlice } from "@reduxjs/toolkit";
import { initialAuthors } from "@/store/initial-data";

const authorsSlice = createSlice({
  name: "authors",
  initialState: { items: initialAuthors },
  reducers: {},
});

export default authorsSlice.reducer;
export const selectAllAuthors = (state) => state.authors.items;
