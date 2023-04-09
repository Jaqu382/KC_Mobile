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
    fineBalance: 0,
    kcBalance: { balance: 0 },
    libraryAccount: '',
    libraryLoans: [],
    libraryRequests: [],
    expirationDate: '',
    dateOfBirth: '',
    caste: '',
    knightsCashAccount: '',
    kcTransactions: [],
    cardSuspended: false,
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
        fineBalance: 0,
        kcBalance: { balance: 0 },
        libraryAccount: '',
        libraryLoans: [],
        libraryRequests: [],
        expirationDate: '',
        dateOfBirth: '',
        caste: '',
        knightsCashAccount: '',
        kcTransactions: [],
        cardSuspended: false,
      };
    },
    toggleCardSuspension: (state) => {
      state.cardSuspended = !state.cardSuspended;
    },
  },
});

export const { updateUser, clearUser,toggleCardSuspension } = userSlice.actions;
export const selectUser = (state) => state.user;

export default userSlice.reducer;