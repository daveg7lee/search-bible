import { configureStore, createSlice } from '@reduxjs/toolkit';

const loading = createSlice({
  name: 'loadingReducer',
  initialState: false,
  reducers: {
    changeMode: (_, { payload }) => {
      return payload;
    },
  },
});

export const { changeMode } = loading.actions;

const loadingStore = configureStore({ reducer: loading.reducer });

export const setLoading = () => {
  const isLoading = loadingStore.getState();
  loadingStore.dispatch(changeMode(!isLoading));
};

export default loadingStore;
