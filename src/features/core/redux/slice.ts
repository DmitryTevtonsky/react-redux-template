import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { StatusEnum } from "../types";

export interface CounterState {
  count: number;
  emojisData: Record<string, string>;
  status: StatusEnum;
}

const initialState: CounterState = {
  count: 0,
  emojisData: {},
  status: StatusEnum.idle,
};

export const coreSlice = createSlice({
  name: "core",
  initialState,
  reducers: {
    initialize: () => {},
    setStatus: (state, action: PayloadAction<StatusEnum>) => {
      state.status = action.payload;
    },
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.count += action.payload;
    },
    decrementByAmount: (state, action: PayloadAction<number>) => {
      state.count -= action.payload;
    },
    setEmojisData: (state, action: PayloadAction<Record<string, string>>) => {
      state.emojisData = action.payload;
    },
  },
});

export const {
  initialize,
  setStatus,
  increment,
  decrement,
  incrementByAmount,
  decrementByAmount,
  setEmojisData,
} = coreSlice.actions;
export default coreSlice.reducer;
