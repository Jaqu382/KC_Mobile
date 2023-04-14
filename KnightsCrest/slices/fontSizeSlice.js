import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  fontSize: 22,
};

export const fontSizeSlice = createSlice({
  name: 'fontSize',
  initialState,
  reducers: {
    setFontSize: (state, action) => {
      state.fontSize = action.payload;
    },
  },
});

export const { setFontSize } = fontSizeSlice.actions;

export default fontSizeSlice.reducer;