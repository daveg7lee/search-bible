import { configureStore, createSlice } from '@reduxjs/toolkit';

const verse = createSlice({
  name: 'verseReducer',
  initialState: '',
  reducers: {
    setVerse: (_, { payload }) => {
      return payload;
    },
  },
});

export const { setVerse } = verse.actions;

const verseStore = configureStore({ reducer: verse.reducer });

export default verseStore;
