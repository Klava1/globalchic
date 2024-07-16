import { createSlice } from "@reduxjs/toolkit";

export const eventsSlice = createSlice({
  name: "events",
  initialState: {
    selectedCategory: "family",
  },
  reducers: {
    filterCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
  },
});

export const getSelectedCategory = (state) => state.events.selectedCategory;
export const { filterCategory } = eventsSlice.actions;
export default eventsSlice.reducer;
