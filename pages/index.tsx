import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import axios from 'axios';
import Head from 'next/head';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Loading from '../components/Loading';
import { KOR, NIV } from '../public/globalVar';
import Welcome from '../components/Welcome';
import Logo from '../components/Logo';
import Bible from '../components/Bible';

const App = () => {
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
    version === KOR ? setVersion(NIV) : setVersion(KOR);
  };
  return (
    <div className="allCenter flex-col h-screen">
      <Head>
        <title>Search Bible</title>
      </Head>
      <div className="w-full bg-headerColor top-0 py-2.5 px-7 md:grid md:grid-cols-header grid-cols-1">
        <Logo />
        <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register('value', { required: true })}
            type="text"
            placeholder="성경과 장과 절을 입력하세요"
            className="input"
          />
        </form>
      </div>
      {loading ? (
        <Loading />
      ) : (
        <div className="h-full w-full bg-bgColor p-6 relative">
          {bible && verses ? (
            <>
              <Bible
                url={`https://ibibles.net/quote.php?${version}-${bible}/${verses}`}
              />
              <button
                onClick={changeVersion}
                className="ml-3 bg-buttonColor py-1.5 px-2.5 rounded-full text-white focus:outline-none absolute right-5 bottom-5"
              >
                {version === KOR ? 'Change to NIV' : '개역한글로 변경'}
              </button>
            </>
          ) : (
            <Welcome />
          )}
        </div>
      )}
    </div>
  );
};

export default App;
