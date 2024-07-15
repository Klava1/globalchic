import { configureStore } from "@reduxjs/toolkit";
import eventsReducer from "./eventsSlice";

export const store = configureStore({
  reducer: {
    events: eventsReducer,
  },
});

export default store;

// import { configureStore } from "@reduxjs/toolkit";
// import eventsSlice from "./eventsSlice";

// export const store = configureStore({
//   reducer: {
//     eventsSlice,
//   },
// });
