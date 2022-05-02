import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "@common/types/user";

interface UserSliceState {
  token: string;
  user: User;
}

const initialState: UserSliceState = {
  token: "",
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
    login: (state, action: PayloadAction<UserSliceState>) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    logout: (state) => {
      state.user = initialState.user;
      state.token = initialState.token;
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
