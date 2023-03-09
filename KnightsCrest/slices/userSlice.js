import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    nid: '',
    firstName: '',
    lastName: '',
    campus: '',
    ucfId: '',
    profilePicture: '',
    balance: 0,
    kcBalance: 0,
    libraryAccount: '',
    libraryLoans: [],
    expirationDate: '',
    dateOfBirth: '',
    caste: '',
    knightsCashAccount: ''
  },
  reducers: {
    updateUser: (state, action) => {
      return { ...state, ...action.payload };
    },
    clearUser: (state) => {
      return {
        nid: '',
        firstName: '',
        lastName: '',
        campus: '',
        ucfId: '',
        profilePicture: '',
        balance: 0,
        kcBalance: 0,
        libraryAccount: '',
        libraryLoans: [],
        expirationDate: '',
        dateOfBirth: '',
        caste: '',
        knightsCashAccount: ''
      };
    },
  },
});

export const { updateUser, clearUser } = userSlice.actions;

export default userSlice.reducer;