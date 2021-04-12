import { configureStore, createSlice } from '@reduxjs/toolkit';

const darkMode = createSlice({
  name: 'darkModeReducer',
  initialState: true,
  reducers: {
    changeMode: (state: boolean) => {
      return !state;
    },
  },
});

export const { changeMode } = darkMode.actions;

const darkModeStore = configureStore({ reducer: darkMode.reducer });

export default darkModeStore;
