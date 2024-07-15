import { createSlice } from "@reduxjs/toolkit";

export const eventsSlice = createSlice({
  name: "events",
  initialState: {
    selectedCategory: "Family",
  },
  reducers: {
    filterCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
  },
});

export const getSelectedCategory = (state) => state.events.selectedCategory;
export default eventsSlice.reducer;
export const { filterCategory } = eventsSlice.actions;
