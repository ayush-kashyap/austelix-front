import { createSlice } from "@reduxjs/toolkit";

const articlesSlice = createSlice({
  name: "articles",
  initialState: { items: [] },
  reducers: {
    setArticles(state, action) {
      state.items = action.payload;
    },
    addArticle(state, action) {
      state.items.unshift(action.payload);
    },
    updateArticle(state, action) {
      const index = state.items.findIndex((a) => a.id === action.payload.id);
      if (index !== -1) {
        state.items[index] = { ...state.items[index], ...action.payload, updatedAt: new Date().toISOString() };
      }
    },
    removeArticle(state, action) {
      state.items = state.items.filter((a) => a.id !== action.payload);
    },
    duplicateArticle(state, action) {
      const found = state.items.find((a) => a.id === action.payload);
      if (!found) return;
      state.items.unshift({
        ...found,
        id: `a${Date.now()}`,
        title: `${found.title} (Copy)`,
        status: "draft",
        slug: `${found.slug}-copy`,
        views: 0,
        publishedAt: null,
        scheduledFor: null,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      });
    },
  },
});

export const { setArticles, addArticle, updateArticle, removeArticle, duplicateArticle } =
  articlesSlice.actions;
export default articlesSlice.reducer;

export const selectAllArticles = (state) => state.articles.items;
export const selectArticleById = (id) => (state) =>
  state.articles.items.find((a) => a.id === id) ?? null;
