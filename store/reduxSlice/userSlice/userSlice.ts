import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { type IUser } from "../../../interface/IUser";
import { EnumKeys } from "../../../constants/enumKeys";

export const initialState: IUser = {
  email: "",
  password: "",
  username: "",
  isLogged: false,
};

export const user = createSlice({
  name: EnumKeys.USER,
  initialState,
  reducers: {
    retrieveUser: (_, { payload }: PayloadAction<IUser>) => payload,
    logUser: (state, { payload }: PayloadAction<boolean>) => ({
      ...state,
      isLogged: payload,
    }),
    changePassword: (state, { payload }: PayloadAction<string>) => ({
      ...state,
      password: payload,
    }),
  },
});

export const { retrieveUser, logUser, changePassword } = user.actions;
export default user.reducer;
