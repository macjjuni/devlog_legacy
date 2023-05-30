import { createSlice } from '@reduxjs/toolkit'

interface IScroll {
  scroll: boolean
}

const initialState: IScroll = {
  scroll: false,
}

export const scrollSlice = createSlice({
  /* eslint-disable no-param-reassign */
  name: 'scroll',
  initialState,
  reducers: {
    onScroll: (state) => {
      state.scroll = true
    },
    offScroll: (state) => {
      state.scroll = false
    },
  },
})

export const { onScroll, offScroll } = scrollSlice.actions
