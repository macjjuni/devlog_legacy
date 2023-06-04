import { createSlice } from '@reduxjs/toolkit'

interface ISearch {
  search: boolean
}

const initialState: ISearch = {
  search: false,
}

export const searchSlice = createSlice({
  /* eslint-disable no-param-reassign */
  name: 'search',
  initialState,
  reducers: {
    onSearch: (state) => {
      state.search = true
    },
    offSearch: (state) => {
      state.search = false
    },
  },
})

export const { onSearch, offSearch } = searchSlice.actions
