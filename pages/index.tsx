import axios from 'axios';
import Head from 'next/head';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const NIV = 'niv';
const KOR = 'kor';

const App = () => {
  const { register, handleSubmit } = useForm();
  const [bible, setBible] = useState('');
  const [verses, setVerses] = useState('');
  const [version, setVersion] = useState(KOR);
  const onSubmit = async (data) => {
    const { value } = data;
    const splited = value.split(' ');
    const koBook = splited[0];
    const verses = splited[1];
    const res = await axios(`/api/toEnglish?value=${koBook}`);
    setBible(res.data.value);
    setVerses(verses);
  };
  const changeVersion = () => {
    if (version === KOR) {
      setVersion(NIV);
    } else if (version === NIV) {
      setVersion(KOR);
    }
  };
  return (
    <div className="allCenter flex-col h-screen">
      <Head>
        <title>Search Bible</title>
      </Head>
      <div className="w-full bg-headerColor top-0 py-2.5 px-1.5 allCenter">
        <form className="w-full sm:w-2/3" onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register('value', { required: true })}
            type="text"
            placeholder="성경과 장과 절을 입력하세요 (Ex 요 3:4-5)"
            className="w-full rounded p-1 border-gray-300 border focus:outline-none focus:ring-1 focus:ring-black focus:ring-opacity-60"
          />
        </form>
      </div>
      <div className="h-full w-full bg-bgColor p-6 relative">
        {bible && verses && (
          <iframe
            src={`http://ibibles.net/quote.php?${version}-${bible}/${verses}`}
            className="w-full h-full"
          >
            <p>현재 사용 중인 브라우저는 iframe 요소를 지원하지 않습니다!</p>
          </iframe>
        )}
        <button
          onClick={changeVersion}
          className="ml-3 bg-buttonColor py-1.5 px-2.5 rounded-full text-white focus:outline-none absolute right-5 bottom-5"
        >
          {version === KOR ? 'Change to NIV' : '개역한글로 변경'}
        </button>
      </div>
    </div>
  );
};

export default App;
