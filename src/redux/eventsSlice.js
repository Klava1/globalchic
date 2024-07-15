import { createSlice } from "@reduxjs/toolkit";

export const eventsSlice = createSlice({
  name: "events",
  initialState: {
    selectedCategory: "Family",
  },
  reducers: {
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
  },
});

export const { setSelectedCategory } = eventsSlice.actions;

export const getSelectedCategory = (state) => state.events.selectedCategory;

export default eventsSlice.reducer;

// import { createSlice } from "@reduxjs/toolkit";

// export const eventsSlice = createSlice({
//   name: "events",
//   initialState: {
//     selectedCategory: "Family",
//   },
//   reducers: {
//     setSelectedCategory: (state, action) => {
//       state.selectedCategory = action.payload;
//     },
//   },
// });

// export const { setSelectedCategory } = eventsSlice.actions;
// export const getSelectedCategory = (state) =>
//   state.eventsSlice.selectedCategory;
// export default eventsSlice.reducer;
