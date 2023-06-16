import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://648bfce48620b8bae7ec0320.mockapi.io/",
});

export const makeRequest = createAsyncThunk(
  "Request",
  async (param, { rejectWithValue }) => {
    const axiosConfig = {
      method: param?.method,
      url: param?.url,
      data: param?.body,
    };

    try {
      const response = await axiosInstance(axiosConfig);
      return response;
    } catch (err) {
      rejectWithValue(err);
    }
  }
);

const axiosRequest = createSlice({
  name: "Axios Request",
  initialState: {
    loading: false,
    error: null,
  },
  extraReducers: {
    [makeRequest.pending]: (state, action) => {
      state.loading = true;
    },
    [makeRequest.fulfilled]: (state, action) => {
      state.loading = false;
    },
    [makeRequest.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default axiosRequest.reducer;
