import css from './Header.module.css';

const Header = () => {
  return (
    <header className={css.headerContainer}>
      <div className={css.logo}>
        <a href="#">LOGO</a>
      </div>
      <nav>
        <ul>
          <li>
            <a href="#">ABOUT</a>
          </li>
          <li>
            <a href="#">CAREER</a>
          </li>
          <li>
            <a href="#">AWARDS</a>
          </li>
          <li>
            <a href="#">CONTACTS</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
