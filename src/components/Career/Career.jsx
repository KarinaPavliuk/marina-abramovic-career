import css from './Career.module.css';
import restEnergy from '../../images/career/rest-energy.png';
import rhythm0 from '../../images/career/rhythm-0.png';
import theArtistIsPresent from '../../images/career/the-artist-is-present.png';
import breathingInBreathingOut from '../../images/career/breathing-in-breathing-out.png';
import imponderabilia from '../../images/career/imponderabilia.png';
import balkanEroticEpic from '../../images/career/balkan-erotic-epic.png';
import sprite from '../../images/sprite.svg';

const Career = () => {
  return (
    <div id="career" className={css.container}>
      <div className={css.descriptionContainer}>
        <p className={css.sitePartName}>CAREER</p>
        <p className={css.description}>
          In his performances, Abramovich shows human problems and problems
          created by people. In each of them, she demonstrates the capabilities
          of the human body, because the productions require considerable
          physical and psychological endurance. Because of this, Abramovich does
          not always take part in his own performances due to age and health,
          and prepares selected people for them, whom he teaches and trains in
          physical and psychological endurance.
        </p>
      </div>
      <ul className={css.performList}>
        <li>
          <p className={css.location}>DUBLIN 1980</p>
          <img
            className={css.image}
            src={restEnergy}
            alt="Performance Rest Energy"
          ></img>
          <p className={css.performTitle}>
            REST ENERGY
            <svg className={css.rightArrow}>
              <use xlinkHref={`${sprite}#icon-slider-right-arrow`} />
            </svg>
          </p>
        </li>

        <li>
          <p className={css.location}>NAPLES 1974</p>
          <img
            className={css.image}
            src={rhythm0}
            alt="Performance Rhythm 0"
          ></img>
          <p className={css.performTitle}>
            RHYTHM 0
            <svg className={css.rightArrow}>
              <use xlinkHref={`${sprite}#icon-slider-right-arrow`} />
            </svg>
          </p>
        </li>

        <li>
          <p className={css.location}>NEW YORK 2010</p>
          <img
            className={css.image}
            src={theArtistIsPresent}
            alt="Performance The Artist Is Present"
          ></img>
          <p className={css.performTitle}>
            THE ARTIST IS PRESENT
            <svg className={css.rightArrow}>
              <use xlinkHref={`${sprite}#icon-slider-right-arrow`} />
            </svg>
          </p>
        </li>

        <li>
          <p className={css.location}>BELGRAD 1977</p>
          <img
            className={css.image}
            src={breathingInBreathingOut}
            alt="Performance Breathing In Breathing Out"
          ></img>
          <p className={css.performTitle}>
            BREATHING IN/BREATHING OUT
            <svg className={css.rightArrow}>
              <use xlinkHref={`${sprite}#icon-slider-right-arrow`} />
            </svg>
          </p>
        </li>

        <li>
          <p className={css.location}>BOLOGNA 1977</p>
          <img
            className={css.image}
            src={imponderabilia}
            alt="Performance Imponderabilia"
          ></img>
          <p className={css.performTitle}>
            IMPONDERABILIA
            <svg className={css.rightArrow}>
              <use xlinkHref={`${sprite}#icon-slider-right-arrow`} />
            </svg>
          </p>
        </li>

        <li>
          <p className={css.location}>BELGRAD 2005</p>
          <img
            className={css.image}
            src={balkanEroticEpic}
            alt="Performance Balkan Erotic Epic"
          ></img>
          <p className={css.performTitle}>
            BALKAN EROTIC EPIC
            <svg className={css.rightArrow}>
              <use xlinkHref={`${sprite}#icon-slider-right-arrow`} />
            </svg>
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Career;
