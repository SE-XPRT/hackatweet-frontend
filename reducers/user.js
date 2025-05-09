import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: { token: null, username: null },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.value.token = action.payload.token;
      state.value.username = action.payload.username;
      state.value.firstname = action.payload.firstname;

      console.log(JSON.parse(JSON.stringify(state.value)));
    },
  },
});

export const { login } = userSlice.actions;
export default userSlice.reducer;
