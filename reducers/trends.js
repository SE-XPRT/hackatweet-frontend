import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const hashtagsSlice = createSlice({
  name: "hashtags",
  initialState,
  reducers: {
    addTrendingHashtags: (state, action) => {
      if (action.payload) {
        state.value.push(
          ...action.payload.filter((e) => !state.value.includes(e))
        );
      }
      console.log(JSON.parse(JSON.stringify(state.value)));
    },
  },
});

export const { addTrendingHashtags } = hashtagsSlice.actions;
export default hashtagsSlice.reducer;
