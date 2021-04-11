import { configureStore, createSlice } from '@reduxjs/toolkit';
import { KOR, NIV } from '../public/globalVar';

const version = createSlice({
  name: 'versionReducer',
  initialState: KOR,
  reducers: {
    change: (_, { payload }) => {
      return payload;
    },
  },
});

export const { change } = version.actions;

const versionStore = configureStore({ reducer: version.reducer });

export const changeVersion = async () => {
  const version = versionStore.getState();
  if (version === KOR) {
    versionStore.dispatch(change(NIV));
  } else {
    versionStore.dispatch(change(KOR));
  }
};

export default versionStore;
