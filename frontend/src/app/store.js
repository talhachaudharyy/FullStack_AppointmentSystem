// store.js
import { configureStore } from '@reduxjs/toolkit';

import userReducer from '../features/userSlice'

const store = configureStore({
  reducer: {
    user: userReducer, // Add your reducers here
    // Add other reducers if you have them
  },
});

export default store;
