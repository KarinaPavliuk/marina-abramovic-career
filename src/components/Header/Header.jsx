import css from './Header.module.css';

const Header = () => {
  return (
    <header className={css.header}>
      <div className={css.logo}>Logo</div>
      <nav>
        <ul>
          <li>About</li>
          <li>Career</li>
          <li>Awards</li>
          <li>Contacts</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;