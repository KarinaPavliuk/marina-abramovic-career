import css from './Footer.module.css';
import sprite from '../../images/sprite.svg';

const Footer = () => {
  return (
    <div className={css.container}>
      <div className={css.contactsAndAboutWrap}>
        <div>
          <a className={css.logoLink} href="#">
            <svg className={css.logoIcon}>
              <use xlinkHref={`${sprite}#icon-logo`} />
            </svg>
          </a>
          <ul className={css.contactsList}>
            <li>TWITTER</li>
            <li>FACEBOOK</li>
            <li>LINKEDIN</li>
          </ul>
        </div>
        <div>
          <p className={css.titleAbout}>About</p>
          <ul className={css.aboutList}>
            <li>ABOUT US</li>
            <li>HOW IT WORKS</li>
            <li>WHAT WE LOOK FOR</li>
            <li>CONTACT US</li>
            <li>CAREERS</li>
            <li>FAQs</li>
          </ul>
        </div>
      </div>
      <div className={css.connectWrap}>
        <p className={css.titleConnect}>Connect</p>
        <p>ZELENA 22 LVIV, UKRAINE</p>
      </div>

      <p className={css.copyright}>ALL RIGHT RESERVED</p>
    </div>
  );
};

export default Footer;
