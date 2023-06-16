import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userDetail from "./redux/userDetails";
import axiosRequest from "./redux/axiosRequest";

export const store = configureStore({
  reducer: {
    app: userDetail,
    http: axiosRequest,
  },
  middleware: [...getDefaultMiddleware({ serializableCheck: false })],
});
