import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const LOGIN = 'car-rental/registration/SIGNUP';

// BASE_URL
const BASE_URL = process.env.REACT_APP_BASE_URL;

// Method register
export const register = createAsyncThunk(LOGIN, async (username, thunkAPI) => {
  const API_URL = `${BASE_URL}/signup`;
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

// Registration Slice
const registrationSlice = createSlice({
  name: 'registration',
  initialState: {
    isLoading: false,
    success: false,
    error: '',
    message: '',
  },
  reducers: {
    reset: (state) => ({
      ...state,
      isLoading: false,
      success: false,
      error: '',
      message: '',
    }),
  },
  extraReducers: (builder) => {
    builder.addCase(register.pending, (state) => ({
      ...state,
      isLoading: true,
      error: '',
    }));

    builder.addCase(register.fulfilled, (state, action) => ({
      ...state,
      isLoading: false,
      success: true,
      message: action.payload.data.message,
    }));

    builder.addCase(register.rejected, (state, action) => ({
      ...state,
      isLoading: false,
      error: action.payload,
    }));
  },
});

export const { reset } = registrationSlice.actions;

export default registrationSlice.reducer;
