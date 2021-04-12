import { configureStore, createSlice } from '@reduxjs/toolkit';

const loading = createSlice({
  name: 'loadingReducer',
  initialState: false,
  reducers: {
    changeMode: (state: boolean) => {
      return !state;
    },
  },
});

export const { changeMode } = loading.actions;

const loadingStore = configureStore({ reducer: loading.reducer });

export default loadingStore;
