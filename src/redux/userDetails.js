import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://172.16.120.17/",
});

//create action
export const createuser = createAsyncThunk(
  "createUser",
  async (data, { rejectWithValue }) => {
    const response = await axios.get(
      "https://648bfce48620b8bae7ec0320.mockapi.io/crud",
      data
    );

    try {
      const result = await response.data;
      return result;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

const userDetail = createSlice({
  name: "userDetail",
  initialState: {
    users: [],
    loading: false,
    error: null,
  },

  extraReducers: {
    [createuser.pending]: (state) => {
      state.loading = true;
    },

    [createuser.fulfilled]: (state, action) => {
      state.loading = false;
      state.users.push(action.payload);
    },

    [createuser.rejected]: (state, action) => {
      state.loading = false;
      state.users = action.payload;
    },
  },
});

export default userDetail.reducer;
