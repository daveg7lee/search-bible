interface BibleProps {
  url: string;
}

const Bible = ({ url }: BibleProps) => (
  <iframe src={url} className="w-full h-full">
    <p>현재 사용 중인 브라우저는 iframe 요소를 지원하지 않습니다!</p>
  </iframe>
);

export default Bible;
