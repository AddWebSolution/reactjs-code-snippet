import { createSlice } from "@reduxjs/toolkit";

const initialState = []

export const demoSlice = createSlice({
    name: 'item',
    initialState: { data : initialState, index: 0 },
    reducers: {
      editItem: (state, action) => {
        state.data[action.payload.index] = action.payload.data
      },
      addItem: (state, action) => {
        state.data.push(action.payload)
      },
      removeItem: (state, action) => {
        state.data.splice(action.payload, 1);
      }
    },
})

export const { addItem, removeItem, editItem } = demoSlice.actions

export default demoSlice.reducer