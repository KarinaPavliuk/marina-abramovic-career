import css from './Footer.module.css';
import sprite from '../../images/sprite.svg';

const Footer = () => {
  return (
    <div id="contacts" className={css.container}>
      <div className={css.contactsAndAboutWrap}>
        <div>
          <a className={css.logoLink} href="#">
            <svg className={css.logoIcon}>
              <use xlinkHref={`${sprite}#icon-logo`} />
            </svg>
          </a>
          <ul className={`${css.contactsList} ${css.mobile}`}>
            <li className={css.listItem}>TWITTER</li>
            <li className={css.listItem}>FACEBOOK</li>
            <li className={css.listItem}>LINKEDIN</li>
          </ul>
          <p className={`${css.copyright} ${css.desktop}`}>
            ALL RIGHT RESERVED
          </p>
        </div>
        <div>
          <p className={css.titleAbout}>About</p>
          <ul className={css.aboutList}>
            <li className={css.listItem}>ABOUT US</li>
            <li className={css.listItem}>HOW IT WORKS</li>
            <li className={css.listItem}>WHAT WE LOOK FOR</li>
            <li className={css.listItem}>CONTACT US</li>
            <li className={css.listItem}>CAREERS</li>
            <li className={css.listItem}>FAQs</li>
          </ul>
        </div>
      </div>
      <div className={css.connectWrap}>
        <p className={css.titleConnect}>Connect</p>
        <p className={css.address}>ZELENA 22 LVIV, UKRAINE</p>
        <ul className={`${css.contactsList} ${css.desktop}`}>
          <li className={css.listItem}>TWITTER</li>
          <li className={css.listItem}>FACEBOOK</li>
          <li className={css.listItem}>LINKEDIN</li>
        </ul>
      </div>

      <p className={`${css.copyright} ${css.mobile}`}>ALL RIGHT RESERVED</p>
    </div>
  );
};

export default Footer;
