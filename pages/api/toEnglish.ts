import { NextApiRequest, NextApiResponse } from 'next';
import bibleTable from '../../public/bibleTable';
import Abbreviation from '../../utils/Abbreviation';

export default (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { value },
  } = req;
  let book: any = value;
  if (book in bibleTable) {
    book = value;
  } else {
    book = Abbreviation(book);
  }
  return res.send({
    value: bibleTable[book],
  });
};
