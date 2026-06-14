import { configureStore } from "@reduxjs/toolkit";
import articlesReducer from "@/store/slices/articlesSlice";
import categoriesReducer from "@/store/slices/categoriesSlice";
import authorsReducer from "@/store/slices/authorsSlice";
import commentsReducer from "@/store/slices/commentsSlice";
import usersReducer from "@/store/slices/usersSlice";
import authReducer from "@/store/slices/authSlice";
import projectReducer from "@/store/slices/projectSlice";

export function makeStore() {
  return configureStore({
    reducer: {
      articles: articlesReducer,
      categories: categoriesReducer,
      authors: authorsReducer,
      comments: commentsReducer,
      users: usersReducer,
      auth: authReducer,
      project: projectReducer,
    },
  });
}

export const store = makeStore();
