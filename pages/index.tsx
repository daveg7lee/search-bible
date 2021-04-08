import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import axios from 'axios';
import Head from 'next/head';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaBible } from 'react-icons/fa';
import { useRouter } from 'next/router';
import Loading from '../components/Loading';

const NIV = 'niv';
const KOR = 'kor';

const App = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm();
  const [bible, setBible] = useState('');
  const [verses, setVerses] = useState('');
  const [loading, setLoading] = useState(false);
  const [version, setVersion] = useState(KOR);
  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const { value } = data;
      const splited = value.split(' ');
      const koBook = splited[0];
      const verses = splited[1];
      const res = await axios(`/api/toEnglish?value=${koBook}`);
      setBible(res.data.value);
      setVerses(verses);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };
  const changeVersion = () => {
    if (version === KOR) {
      setVersion(NIV);
    } else if (version === NIV) {
      setVersion(KOR);
    }
  };
  const clearState = () => {
    setBible('');
    setVerses('');
    router.reload();
  };
  return (
    <div className="allCenter flex-col h-screen">
      <Head>
        <title>Search Bible</title>
      </Head>
      <div className="w-full bg-headerColor top-0 py-2.5 px-1.5 md:grid md:grid-cols-3 grid-cols-1">
        <FaBible
          size={30}
          className="hidden md:block ml-5 cursor-pointer"
          onClick={clearState}
        />
        <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register('value', { required: true })}
            type="text"
            placeholder="성경과 장과 절을 입력하세요"
            className="w-full rounded p-1 border-gray-300 border focus:outline-none focus:ring-1 focus:ring-black focus:ring-opacity-60"
          />
        </form>
      </div>
      {loading ? (
        <Loading />
      ) : (
        <div className="h-full w-full bg-bgColor p-6 relative">
          {bible && verses ? (
            <iframe
              src={`https://ibibles.net/quote.php?${version}-${bible}/${verses}`}
              className="w-full h-full"
            >
              <p>현재 사용 중인 브라우저는 iframe 요소를 지원하지 않습니다!</p>
            </iframe>
          ) : (
            <div className="flex items-center flex-col h-full">
              <h1 className="text-3xl font-semibold py-8 text-center">
                Welcome to Search Bible
              </h1>
              <p className="font-medium text-center">
                You can search bible like 요 1:2-3
              </p>
              <p className="font-medium text-center">or like 요한복음 1:2-3</p>
            </div>
          )}
          <button
            onClick={changeVersion}
            className="ml-3 bg-buttonColor py-1.5 px-2.5 rounded-full text-white focus:outline-none absolute right-5 bottom-5"
          >
            {version === KOR ? 'Change to NIV' : '개역한글로 변경'}
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
