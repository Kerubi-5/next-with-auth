import { configureStore } from "@reduxjs/toolkit";
import { todoSlice } from "./todo";

const store = configureStore({
  reducer: {
    todo: todoSlice,
  },
});

type RootState = ReturnType<typeof store.getState>;

export const selectTodos = (state: RootState) => state.todo.todos;

export default store;
