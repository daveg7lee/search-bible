import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import axios from 'axios';
import Head from 'next/head';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import Loading from '../components/Loading';
import { KOR, NIV } from '../public/globalVar';
import Button from '../components/Button';
import Welcome from '../components/Welcome';
import Logo from '../components/Logo';

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
      <div className="w-full bg-headerColor top-0 py-2.5 px-7 md:grid md:grid-cols-header grid-cols-1">
        <Logo clearState={clearState} />
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
              <iframe
                src={`https://ibibles.net/quote.php?${version}-${bible}/${verses}`}
                className="w-full h-full"
              >
                <p>
                  현재 사용 중인 브라우저는 iframe 요소를 지원하지 않습니다!
                </p>
              </iframe>
              <Button changeVersion={changeVersion} />
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
