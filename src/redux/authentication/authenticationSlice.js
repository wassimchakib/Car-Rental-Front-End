import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const LOGIN = 'car-rental/authentication/LOGIN';

export const getToken = createAsyncThunk(LOGIN, async (username, thunkAPI) => {
  const API_URL = 'http://localhost:1800/login';
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    return await axios.post(API_URL, JSON.stringify({ username }), requestOptions);
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response.data.error);
  }
});

const authenticationSlice = createSlice({
  name: 'authentication',
  initialState: {
    isLoading: false,
    response: '',
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
      success: true,
      token: action.payload.data.token,
    }));

    builder.addCase(getToken.rejected, (state, action) => ({
      ...state,
      isLoading: false,
      error: action.payload,
    }));
  },
});

export default authenticationSlice.reducer;
