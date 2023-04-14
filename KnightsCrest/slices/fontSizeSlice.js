import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  fontSize: 16,
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