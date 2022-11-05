import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { useEffect, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import Loading from "../components/Loading";
import Welcome from "../components/Welcome";
import Bible from "../components/Bible";
import Header from "../components/Header";
import darkModeStore from "../stores/darkModeStore";
import bookStore from "../stores/bookStore";
import verseStore from "../stores/verseStore";
import { getBible } from "../api";

const App = () => {
  const [data, setData] = useState(null);
  const mutation = useMutation(getBible, {
    onSuccess: (res) => {
      setData(res);
    },
  });
  const [book, setBook] = useState("");
  const [verses, setVerses] = useState("");
  bookStore.subscribe(() => {
    setBook(bookStore.getState());
  });
  verseStore.subscribe(() => {
    setVerses(verseStore.getState());
  });
  darkModeStore.subscribe(() => {
    const isDark = darkModeStore.getState();
    const html = document.querySelector("html");
    if (isDark) {
      html.className = "dark";
    } else {
      html.className = "";
    }
  });

  useEffect(() => {
    if (book && verses) {
      mutation.mutate({
        doc: book,
        lang: "kor",
        start: verses.split("-")[0],
        end: verses.split("-")[1] ? verses.split("-")[1] : verses.split("-")[0],
      });
    }
  }, [book, verses]);
  return (
    <div className="allCenter flex-col h-screen">
      <Header />
      {mutation.isLoading ? (
        <Loading />
      ) : (
        <div className="h-full w-full bg-bgColor dark:bg-darkBgColor p-6 relative overflow-y-auto">
          {data ? <Bible data={data} /> : <Welcome />}
        </div>
      )}
    </div>
  );
};

export default App;
