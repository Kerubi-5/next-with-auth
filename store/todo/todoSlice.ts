import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo } from "@common/types/todo";

interface TodoSliceState {
  todos: Todo[];
}

const initialState: TodoSliceState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    populateTodos: (state, payload: PayloadAction<Todo[]>) => {
      state.todos = payload.payload;
    },
    addTodo: (state, payload: PayloadAction<Todo>) => {
      state.todos.push(payload.payload);
    },
    removeTodo: (state, payload: PayloadAction<Todo>) => {
      state.todos = state.todos.filter(
        (todo) => todo._id !== payload.payload._id
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const { populateTodos, addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
