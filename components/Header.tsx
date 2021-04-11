import DarkModeBtn from './DarkModeBtn';
import Form from './Form';
import Logo from './Logo';

const Header = ({ onSubmit }) => (
  <header className="header">
    <div className="h-full hidden md:block">
      <Logo />
    </div>
    <div className="allCenter w-full h-full">
      <Form onSubmit={onSubmit} />
    </div>
    <div className="h-full hidden md:block">
      <DarkModeBtn />
    </div>
  </header>
);

export default Header;
