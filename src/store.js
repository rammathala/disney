import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from "./Userslice";


export default configureStore({
  reducer: {
    user: userReducer,
    
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});