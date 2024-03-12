import { useState } from 'react';

import css from './Header.module.css';
import sprite from '../../images/sprite.svg';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  function toggleMenuByBackdrop(event: React.MouseEvent<HTMLDivElement>) {
    const target = event.target as HTMLElement;
    const targetClassName = target.className;
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
            <li className={css.navigationItem} onClick={toggleMenu}>
              <a href="#about">ABOUT</a>
            </li>
            <li className={css.navigationItem} onClick={toggleMenu}>
              <a href="#career">CAREER</a>
            </li>
            <li className={css.navigationItem} onClick={toggleMenu}>
              <a href="#awards">AWARDS</a>
            </li>
            <li className={css.navigationItem} onClick={toggleMenu}>
              <a href="#contacts">CONTACTS</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
