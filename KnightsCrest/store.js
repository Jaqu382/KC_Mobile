import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import fontSizeReducer from './slices/fontSizeSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    fontSize: fontSizeReducer,
  },
});

export default store;