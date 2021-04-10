import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Loading from '../components/Loading';
import { KOR, NIV } from '../public/globalVar';
import Welcome from '../components/Welcome';
import Bible from '../components/Bible';
import Button from '../components/Button';
import Header from '../components/Header';
import toEnglish from '../utils/toEnglish';
import DarkModeBtn from '../components/DarkModeBtn';

const App = () => {
  const { register, handleSubmit } = useForm();
  const [loading, setLoading] = useState(false);
  const [version, setVersion] = useState(KOR);
  const [HTML, setHTML] = useState(null);
  const [book, setBook] = useState('');
  const [verses, setVerses] = useState('');
  const [dark, setDark] = useState(true);
  // useEffect for dark mode
  useEffect(() => {
    const html = document.querySelector('html');
    if (dark) {
      html.className = 'dark';
    } else {
      html.className = '';
    }
  }, [dark]);
  // useEffect for edit HTML
  useEffect(() => {
    const editHTML = async () => {
      const {
        data: { html },
      } = await axios(
        `api/getHTML?version=${version}&book=${book}&verses=${verses}`
      );
      setLoading(false);
      setHTML(html);
    };
    if (book && verses && verses) {
      setLoading(true);
      editHTML();
    }
  }, [book, verses, version]);
  // get data and change verses and book to edit HTML
  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const { value } = data;
      const splitedValue = value.split(' ');
      const koBook = splitedValue[0];
      const splitedVerses = splitedValue[1].replace(':', '%3A');
      const engBook = toEnglish(koBook);
      setVerses(splitedVerses);
      setBook(engBook);
    } catch (e) {
      console.log(e);
    }
  };
  // change bible version
  const changeVersion = async () => {
    version === KOR ? setVersion(NIV) : setVersion(KOR);
  };
  return (
    <div className="allCenter flex-col h-screen">
      <Header
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        register={register}
        setDark={setDark}
        dark={dark}
      />
      {loading ? (
        <Loading />
      ) : (
        <div className="h-full w-full bg-bgColor dark:bg-darkBgColor p-6 relative">
          {HTML ? (
            <>
              <Bible html={HTML} />
              <Button changeVersion={changeVersion} version={version} />
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
