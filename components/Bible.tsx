interface BibleProps {
  data: any;
}

const Bible = ({ data }: BibleProps) => (
  <div className="dark:bg-darkBgColor bg-bgColor dark:text-white">
    {data.map((verse) => (
      <p>
        {verse.chapter}:{verse.verse} {verse.message}
      </p>
    ))}
  </div>
);

export default Bible;
