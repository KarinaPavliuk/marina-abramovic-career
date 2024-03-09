import { useState } from 'react';
import { Link } from 'react-router-dom';

import css from './Header.module.css';
import sprite from '../../images/sprite.svg';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  function toggleMenuByBackdrop(event) {
    const targetClassName = event.target.className;
    if (
      typeof targetClassName === 'string' &&
      targetClassName.includes('backdrop')
    ) {
      setIsOpen(false);
    }
  }

  return (
    <header className={css.сontainer}>
      <a className={css.logoLink} href="#">
        <svg className={css.logoIcon}>
          <use xlinkHref={`${sprite}#icon-logo`} />
        </svg>
      </a>
      <nav className={css.navigation}>
        <ul>
          <li className={css.navigationItem}>
            {/* <Link to="/about">ABOUT</Link> */}
            <a href="#about">ABOUT</a>
          </li>
          <li className={css.navigationItem}>
            {/* <Link to="/career">CAREER</Link> */}
            <a href="#career">CAREER</a>
          </li>
          <li className={css.navigationItem}>
            <a href="#awards">AWARDS</a>
          </li>
          <li className={css.navigationItem}>
            <a href="#contacts">CONTACTS</a>
          </li>
        </ul>
      </nav>

      <button onClick={toggleMenu} type="button" className={css.menuButton}>
        <svg className={css.menuIcon}>
          <use xlinkHref={`${sprite}#icon-menu`} />
        </svg>
      </button>

      <div
        className={`${css.backdrop} ${isOpen && css.open}`}
        onClick={toggleMenuByBackdrop}
      >
        <nav className={`${css.mobileMenu} ${isOpen && css.open}`}>
          <button
            onClick={toggleMenu}
            type="button"
            className={css.closeMenuButton}
          >
            <svg className={css.closeMenuIcon}>
              <use xlinkHref={`${sprite}#icon-close`} />
            </svg>
          </button>
          <ul className={css.menuList}>
            <li className={css.navigationItem}>
              <a href="#about">ABOUT</a>
            </li>
            <li className={css.navigationItem}>
              <a href="#career">CAREER</a>
            </li>
            <li className={css.navigationItem}>
              <a href="#awards">AWARDS</a>
            </li>
            <li className={css.navigationItem}>
              <a href="#contacts">CONTACTS</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
