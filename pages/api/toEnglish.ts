import { NextApiRequest, NextApiResponse } from 'next';
import bibleTable from '../../public/bibleTable';

export default (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { value },
  } = req;
  const book: any = value;
  return res.send({
    value: bibleTable[book],
  });
};
