interface BibleProps {
  html: string;
}

const Bible = ({ html }: BibleProps) => (
  <div
    className="dark:bg-darkBgColor bg-bgColor dark:text-white"
    dangerouslySetInnerHTML={{ __html: html }}
  ></div>
);

export default Bible;
