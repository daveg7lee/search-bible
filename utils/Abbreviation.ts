import AbbreviationTable from '../public/AbbreviationTable';

const Abbreviation = (book: string) => {
  if (book in AbbreviationTable) {
    return AbbreviationTable[book];
  }
};

export default Abbreviation;
