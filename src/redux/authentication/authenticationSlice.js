import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import API from '../../services/API';

const LOGIN = 'car-rental/authentication/LOGIN';

export const getToken = createAsyncThunk(LOGIN, API.login);

const authenticationSlice = createSlice({
  name: 'authentication',
  initialState: {
    isLoading: false,
    username: '',
    token: '',
  },
  extraReducers: (builder) => {
    builder.addCase(getToken.pending, (state) => ({
      ...state,
      isLoading: true,
      error: '',
    }));

    builder.addCase(getToken.fulfilled, (state, action) => ({
      ...state,
      isLoading: false,
      token: action.payload,
    }));

    builder.addCase(getToken.rejected, (state, action) => ({
      ...state,
      isLoading: false,
      error: action.error,
    }));
  },
});

export default authenticationSlice.reducer;
