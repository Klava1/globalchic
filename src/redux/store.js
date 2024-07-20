import { configureStore } from "@reduxjs/toolkit";
import events from "./eventsSlice";
import cart from "./cartSlice";
// import notifications from "./notificationsSlice";

export const store = configureStore({
  reducer: {
    events,
    cart,
    // notifications,
  },
});
