import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { themeSlice } from './slice/theme'
import { scrollSlice } from './slice/scroll'
import { searchSlice } from './slice/search'

const rootReducer = combineReducers({
  theme: themeSlice.reducer,
  scroll: scrollSlice.reducer,
  search: searchSlice.reducer,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
  devTools: process.env.NODE_ENV !== 'production',
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
