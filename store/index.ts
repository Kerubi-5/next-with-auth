import { configureStore } from "@reduxjs/toolkit";
import { todoSlice } from "./todo";
import { uiSlice } from "./ui";
import { userSlice } from "./user";

const store = configureStore({
  reducer: {
    todo: todoSlice,
    ui: uiSlice,
    user: userSlice,
  },
});

type RootState = ReturnType<typeof store.getState>;

export const selectTodos = (state: RootState) => state.todo.todos;

export const selectUi = (state: RootState) => state.ui;

export const selectUser = (state: RootState) => state.user;

export default store;
