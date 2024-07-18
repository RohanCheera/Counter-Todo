import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice(
    {
  name: 'counter',
  initialState: {
    counter1: 0,
    counter2: 0
  },
  reducers: {
    incrementCounter1: (state) => {
      state.counter1 += 1;
    },
    decrementCounter1: (state) => {
      state.counter1 -= 1;
    },
    incrementBoth: (state) => {
      state.counter1 += 1;
      state.counter2 += 1;
    },
    incrementCounter2: (state) => {
      state.counter2 += 1;
    },
    decrementCounter2: (state) => {
      state.counter2 -= 1;
    },
    decrementBoth: (state) => {
      state.counter1 -= 1;
      state.counter2 -= 1;
    },
  },
}
);

export const { incrementCounter1,incrementCounter2, decrementCounter1,decrementCounter2, incrementBoth,decrementBoth } = counterSlice.actions;

export default counterSlice.reducer;
