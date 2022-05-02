import { METHODS } from "@common/types/methods";
import { Todo } from "@common/types/todo";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UiSliceState {
  isOpen: boolean;
  method: string;
  todo?: Partial<Todo>;
}

const initialState: UiSliceState = {
  isOpen: false,
  method: "",
  todo: {
    _id: "",
    title: "",
    description: "",
  },
};

export const userSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<METHODS>) => {
      state.isOpen = true;
      state.method = action.payload;
    },
    closeModal: (state) => {
      state.isOpen = false;
    },
    populateModal: (state, action: PayloadAction<Partial<Todo>>) => {
      state.todo = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { openModal, closeModal, populateModal } = userSlice.actions;

export default userSlice.reducer;
