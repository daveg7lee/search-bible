import { toast } from 'react-toastify';
import AbbreviationTable from '../public/AbbreviationTable';
import bibleTable from '../public/bibleTable';

const toEnglish = (value: string) => {
  const values = Object.values(bibleTable);
  if (values.includes(value)) {
    return value;
  } else if (value in AbbreviationTable) {
    return bibleTable[AbbreviationTable[value]];
  } else if (value in bibleTable) {
    return bibleTable[value];
  } else {
    toast.error('Invalid Syntax');
  }
};

export default toEnglish;
