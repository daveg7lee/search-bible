import { IoSearchSharp } from 'react-icons/io5';

const Form = ({ handleSubmit, onSubmit, register }) => (
  <form className="w-full allCenter relative" onSubmit={handleSubmit(onSubmit)}>
    <input
      {...register('value', { required: true })}
      type="text"
      placeholder="성경과 장과 절을 입력하세요"
      className="input"
    />
    <button
      type="submit"
      className="absolute right-1.5 h-7 w-7 rounded allCenter focus:outline-none"
    >
      <IoSearchSharp name="Search-icon" />
    </button>
  </form>
);

export default Form;
