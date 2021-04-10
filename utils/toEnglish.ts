import bibleTable from '../public/bibleTable';
import Abbreviation from './Abbreviation';

const toEnglish = (value: string) => {
  let book = value;
  if (book in bibleTable) {
    book = value;
  } else {
    book = Abbreviation(book);
  }
  return bibleTable[book];
};

export default toEnglish;
