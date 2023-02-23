import { createSlice } from '@reduxjs/toolkit'

interface ITheme {
  theme: 'dark' | 'light' | null
}

export const light = 'light'
export const dark = 'dark'

const initialState: ITheme = {
  theme: null,
}

export const themeSlice = createSlice({
  /* eslint-disable no-param-reassign */
  name: 'colorMode',
  initialState,
  reducers: {
    toggle: (state) => {
      if (state.theme === light) state.theme = dark
      else state.theme = light
    },
    setLight: (state) => {
      state.theme = light
    },
    setDark: (state) => {
      state.theme = dark
    },
  },
  /* eslint-enable no-param-reassign */
})

export const { toggle, setLight, setDark } = themeSlice.actions
