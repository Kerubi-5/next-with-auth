import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "@common/types/user";

interface UserSliceState {
  user: User;
}

const initialState: UserSliceState = {
  user: {
    email: "",
    password: "",
    name: "",
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, payload: PayloadAction<User>) => {
      state.user = payload.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { login } = userSlice.actions;

export default userSlice.reducer;
