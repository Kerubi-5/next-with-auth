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
    populateTodos: (state, action: PayloadAction<Todo[]>) => {
      state.todos = action.payload;
    },
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.todos.push(action.payload);
    },
    removeTodo: (state, action: PayloadAction<Todo>) => {
      state.todos = state.todos.filter(
        (todo) => todo._id !== action.payload._id
      );
    },
    updateTodo: (state, action: PayloadAction<Todo>) => {
      state.todos = state.todos.map((todo) =>
        todo._id === action.payload._id ? action.payload : todo
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const { populateTodos, addTodo, removeTodo, updateTodo } =
  todoSlice.actions;

export default todoSlice.reducer;
