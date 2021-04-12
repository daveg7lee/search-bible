import { useForm } from 'react-hook-form';
import verseStore, { setVerse } from '../stores/verseStore';
import bookStore, { setBook } from '../stores/bookStore';
import toEnglish from '../utils/toEnglish';
import { toast } from 'react-toastify';
import sleep from 'await-sleep';
import { useRouter } from 'next/router';
import loadingStore, { changeMode } from '../stores/loadingStore';

const Form = () => {
  const router = useRouter();
  const onSubmit = async (data) => {
    loadingStore.dispatch(changeMode());
    try {
      const { value } = data;
      const splitedValue = value.split(' ');
      const koBook = splitedValue[0];
      const splitedVerses = splitedValue[1].replace(':', '%3A');
      const engBook = toEnglish(koBook);
      verseStore.dispatch(setVerse(splitedVerses));
      bookStore.dispatch(setBook(engBook));
    } catch (e) {
      toast.error('Invalid Syntax');
      await sleep(2000);
      router.reload();
    }
  };
  const { register, handleSubmit } = useForm();
  return (
    <form
      className="w-full allCenter relative"
      onSubmit={handleSubmit(onSubmit)}
    >
      <input
        {...register('value', { required: true })}
        type="text"
        placeholder="성경과 장과 절을 입력하세요"
        className="input"
      />
      <button
        type="submit"
        className="absolute right-1.5 h-7 w-7 rounded allCenter focus:outline-none block lg:hidden"
      >
        <i className="xi-search xi-x"></i>
      </button>
    </form>
  );
};

export default Form;
