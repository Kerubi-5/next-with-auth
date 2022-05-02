import { configureStore } from "@reduxjs/toolkit";
import { todoSlice } from "./todo";
import { uiSlice } from "./ui";
const store = configureStore({
  reducer: {
    todo: todoSlice,
    ui: uiSlice,
  },
});

type RootState = ReturnType<typeof store.getState>;

export const selectTodos = (state: RootState) => state.todo.todos;

export const selectUi = (state: RootState) => state.ui;

export default store;
