import css from './Footer.module.css';

const Footer = () => {
  return(
    <div className={css.footer}>
      <div>
        <p className={css.logo}>Logo</p>
        <p>all right reserved</p>
      </div>
      <div>
        <p>About</p>
        <ul>
          <li>About us</li>
          <li>How it works</li>
          <li>What we look for</li>
          <li>Contact us</li>
          <li>Careers</li>
          <li>FAQS</li>
        </ul>
        <ul>
          <li>Connect</li>
          <li>Zelena 22  lviv, ukraine</li>
          <li>Twitter</li>
          <li>Facebook</li>
          <li>Linkedin</li>
        </ul>
      </div>
    </div>
  )
}

export default Footer;