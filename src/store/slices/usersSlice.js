import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState: { items: [] },
  reducers: {
    setUsers(state, action) {
      state.items = action.payload;
    },
  },
});

export const { setUsers } = usersSlice.actions;
export default usersSlice.reducer;
export const selectAllUsers = (state) => state.users.items;
