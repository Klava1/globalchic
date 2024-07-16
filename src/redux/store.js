import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import eventsSlice from "./eventsSlice";

export const store = configureStore({
  reducer: {
    events: eventsSlice,
    cartSlice,
  },
});
