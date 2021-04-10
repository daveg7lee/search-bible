import cheerio from 'cheerio';
import { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { version, book, verses },
  } = req;
  const url = `https://ibibles.net/quote.php?${version}-${book}/${verses}`;
  const fetchData = await fetch(url, { mode: 'no-cors' });
  const $ = cheerio.load(await fetchData.text());
  const html = $('body').html();
  return res.send({
    html,
  });
};
