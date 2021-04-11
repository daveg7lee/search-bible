import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import axios from 'axios';
import sleep from 'await-sleep';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import Loading from '../components/Loading';
import Welcome from '../components/Welcome';
import Bible from '../components/Bible';
import Button from '../components/Button';
import Header from '../components/Header';
import toEnglish from '../utils/toEnglish';
import darkModeStore from '../stores/darkModeStore';
import versionStore from '../stores/versionStore';

const App = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [version, setVersion] = useState(versionStore.getState());
  const [HTML, setHTML] = useState(null);
  const [book, setBook] = useState('');
  const [verses, setVerses] = useState('');
  darkModeStore.subscribe(() => {
    const isDark = darkModeStore.getState();
    const html = document.querySelector('html');
    if (isDark) {
      html.className = 'dark';
    } else {
      html.className = '';
    }
  });
  versionStore.subscribe(() => {
    setVersion(versionStore.getState());
  });
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
    if (book && verses && version) {
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
      toast.error('Invalid Syntax');
      await sleep(2000);
      router.reload();
    }
  };
  return (
    <div className="allCenter flex-col h-screen">
      <Header onSubmit={onSubmit} />
      {loading ? (
        <Loading />
      ) : (
        <div className="h-full w-full bg-bgColor dark:bg-darkBgColor p-6 relative overflow-y-auto">
          {HTML ? <Bible html={HTML} /> : <Welcome />}
          <Button />
        </div>
      )}
    </div>
  );
};

export default App;
