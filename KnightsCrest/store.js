import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import fontSizeReducer from './slices/fontSizeSlice';
import darkModeReducer from './slices/darkModeSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    fontSize: fontSizeReducer,
    darkMode: darkModeReducer,
  },
});

export default store;