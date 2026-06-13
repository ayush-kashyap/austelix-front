import { createSlice } from "@reduxjs/toolkit";
import { initialCategories } from "@/store/initial-data";

const categoriesSlice = createSlice({
  name: "categories",
  initialState: { items: initialCategories },
  reducers: {},
});

export default categoriesSlice.reducer;
export const selectAllCategories = (state) => state.categories.items;
