import AbbreviationTable from '../public/AbbreviationTable';

export default (book: string) => {
  if (book in AbbreviationTable) {
    return AbbreviationTable[book];
  }
};
