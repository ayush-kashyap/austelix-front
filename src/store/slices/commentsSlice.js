import { createSlice } from "@reduxjs/toolkit";

const commentsSlice = createSlice({
  name: "comments",
  initialState: { items: [] },
  reducers: {
    setComments(state, action) {
      state.items = action.payload;
    },
    setCommentStatus(state, action) {
      const { id, status } = action.payload;
      const comment = state.items.find((c) => c.id === id);
      if (comment) comment.status = status;
    },
    removeComment(state, action) {
      state.items = state.items.filter((c) => c.id !== action.payload);
    },
  },
});

export const { setComments, setCommentStatus, removeComment } = commentsSlice.actions;
export default commentsSlice.reducer;
export const selectAllComments = (state) => state.comments.items;
