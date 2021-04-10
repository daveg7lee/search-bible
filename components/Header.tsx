import DarkModeBtn from './DarkModeBtn';
import Form from './Form';
import Logo from './Logo';

const Header = ({ handleSubmit, onSubmit, register, setDark, dark }) => (
  <div className="header">
    <div className="h-full hidden md:block">
      <Logo />
    </div>
    <div className="allCenter w-full h-full">
      <Form
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        register={register}
      />
    </div>
    <div className="h-full hidden md:block">
      <DarkModeBtn setDark={setDark} dark={dark} />
    </div>
  </div>
);

export default Header;
