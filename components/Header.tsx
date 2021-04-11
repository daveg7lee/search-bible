import DarkModeBtn from './DarkModeBtn';
import Form from './Form';
import Logo from './Logo';

const Header = () => (
  <header className="header">
    <div className="h-full hidden md:block">
      <Logo />
    </div>
    <div className="allCenter w-full h-full">
      <Form />
    </div>
    <div className="h-full hidden md:block">
      <DarkModeBtn />
    </div>
  </header>
);

export default Header;
