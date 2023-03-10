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
    kcBalance: { balance: 0 },
    libraryAccount: '',
    libraryLoans: [],
    expirationDate: '',
    dateOfBirth: '',
    caste: '',
    knightsCashAccount: '',
    kcTransactions: [],
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
        kcBalance: { balance: 0 },
        libraryAccount: '',
        libraryLoans: [],
        expirationDate: '',
        dateOfBirth: '',
        caste: '',
        knightsCashAccount: '',
        kcTransactions: [],
      };
    },
  },
});

export const { updateUser, clearUser } = userSlice.actions;
export const selectUser = (state) => state.user;

export default userSlice.reducer;