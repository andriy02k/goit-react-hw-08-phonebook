import { createSlice } from '@reduxjs/toolkit';
import { loginThunk, refreshThunk, signUpThunk, logoutThunk } from './thunks';
import { handleIfPending, handleIfReject, handleIfFulfilled } from './handlers';

const initialState = {
  token: '',
  profile: null,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(signUpThunk.pending, handleIfPending)
      .addCase(signUpThunk.rejected, handleIfReject)
      .addCase(signUpThunk.fulfilled, handleIfFulfilled)
      .addCase(loginThunk.pending, handleIfPending)
      .addCase(loginThunk.rejected, handleIfReject)
      .addCase(loginThunk.fulfilled, handleIfFulfilled)
      .addCase(logoutThunk.pending, handleIfPending)
      .addCase(logoutThunk.rejected, handleIfReject)
      .addCase(logoutThunk.fulfilled, state => {
        state.error = null;
        state.token = '';
        state.profile = null;
        state.isLoading = false;
      })
      // .addCase(logoutThunk.fulfilled, () => {
      //     return initialState;
      // })
      .addCase(refreshThunk.pending, handleIfPending)
      .addCase(refreshThunk.rejected, handleIfReject)
      .addCase(refreshThunk.fulfilled, (state, { payload }) => {
        state.profile = payload;
        state.isLoading = false;
        state.error = null;
      });
  },
});

export const authReducer = authSlice.reducer;
