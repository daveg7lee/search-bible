import { configureStore, createSlice } from '@reduxjs/toolkit';

const book = createSlice({
  name: 'bookReducer',
  initialState: '',
  reducers: {
    setBook: (_, { payload }) => {
      return payload;
    },
  },
});

export const { setBook } = book.actions;

const bookStore = configureStore({ reducer: book.reducer });

export default bookStore;
