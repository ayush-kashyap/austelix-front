import { createSlice } from "@reduxjs/toolkit";
import { initialUsers } from "@/store/initial-data";

const usersSlice = createSlice({
  name: "users",
  initialState: { items: initialUsers },
  reducers: {},
});

export default usersSlice.reducer;
export const selectAllUsers = (state) => state.users.items;
