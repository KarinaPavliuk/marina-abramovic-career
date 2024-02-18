import css from './Header.module.css';

const Header = () => {
  return (
    <header className={css.headerContainer}>
      <div className={css.logo}>LOGO</div>
      <nav>
        <ul>
          <li>ABOUT</li>
          <li>CAREER</li>
          <li>AWARDS</li>
          <li>CONTACTS</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
