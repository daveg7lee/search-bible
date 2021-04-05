import axios from 'axios';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const App = () => {
  const { register, handleSubmit } = useForm();
  const [bible, setBible] = useState('');
  const [verses, setVerses] = useState('');
  const onSubmit = async (data) => {
    const { value } = data;
    const splited = value.split(' ');
    const res = await axios(`/api/toEnglish?value=${splited[0]}`);
    setBible(res.data.value);
    setVerses(splited[1]);
  };
  return (
    <div className="allCenter flex-col h-screen">
      <div className="w-full bg-headerColor top-0 py-2.5 px-1.5 allCenter">
        <form className="w-2/4" onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register('value', { required: true })}
            type="text"
            placeholder="성경과 장과 절을 입력하세요 (Ex 요 3:4-5)"
            className="w-full rounded p-1 border-gray-300 border outline-none focus:ring-1 focus:ring-black focus:ring-opacity-60"
          />
        </form>
      </div>
      <div className="h-full w-full bg-bgColor overflow-auto">
        {bible && verses && (
          <iframe
            src={`http://ibibles.net/quote.php?kor-${bible}/${verses}`}
            className="w-full h-full overflow-auto"
          >
            <p>현재 사용 중인 브라우저는 iframe 요소를 지원하지 않습니다!</p>
          </iframe>
        )}
      </div>
    </div>
  );
};

export default App;
