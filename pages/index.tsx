import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Loading from '../components/Loading';
import Welcome from '../components/Welcome';
import Bible from '../components/Bible';
import Button from '../components/Button';
import Header from '../components/Header';
import darkModeStore from '../stores/darkModeStore';
import versionStore from '../stores/versionStore';
import bookStore from '../stores/bookStore';
import verseStore from '../stores/verseStore';

const App = () => {
  const [loading, setLoading] = useState(false);
  const [version, setVersion] = useState(versionStore.getState());
  const [HTML, setHTML] = useState(null);
  const [book, setBook] = useState('');
  const [verses, setVerses] = useState('');
  bookStore.subscribe(() => {
    setBook(bookStore.getState());
  });
  verseStore.subscribe(() => {
    setVerses(verseStore.getState());
  });
  versionStore.subscribe(() => {
    setVersion(versionStore.getState());
  });
  darkModeStore.subscribe(() => {
    const isDark = darkModeStore.getState();
    const html = document.querySelector('html');
    if (isDark) {
      html.className = 'dark';
    } else {
      html.className = '';
    }
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
  return (
    <div className="allCenter flex-col h-screen">
      <Header />
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
