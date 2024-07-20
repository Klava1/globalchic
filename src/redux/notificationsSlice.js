import { createSlice } from "@reduxjs/toolkit";

export const notificationsSlice = createSlice({
  name: "notifications",
  initialState: {
    notificationsItems: [],
  },
  reducers: {
    addNotification: (state, action) => {
      state.notificationsItems.push(action.payload);
    },
    removeNotification: (state, action) => {
      state.notificationsItems = state.notificationsItems.filter(
        (notification) => notification.id !== action.payload
      );
    },
  },
});

export const getNotificationsItems = (state) =>
  state.notifications.notificationsItems;
export const { addNotification, removeNotification } =
  notificationsSlice.actions;
export default notificationsSlice.reducer;
