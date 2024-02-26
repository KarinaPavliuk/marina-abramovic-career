import css from './Header.module.css';
import sprite from '../../images/sprite.svg';

const Header = () => {
  return (
    <header className={css.headerContainer}>
      <a className={css.logoLink} href="#">
        <svg className={css.logoIcon}>
          <use xlinkHref={`${sprite}#icon-logo`} />
        </svg>
      </a>
      <nav className={css.navigation}>
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

      <button type="button" className={css.menuButton}>
        <svg className={css.menuIcon}>
          <use xlinkHref={`${sprite}#icon-menu`} />
        </svg>
      </button>

      <div className={css.backdrop}>
        <nav className={css.mobileMenu}>
          <button type="button" className={css.closeMenuButton}>
            <svg className={css.closeMenuIcon}>
              <use xlinkHref={`${sprite}#icon-close`} />
            </svg>
          </button>
          <ul className={css.menuList}>
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
      </div>
    </header>
  );
};

export default Header;
