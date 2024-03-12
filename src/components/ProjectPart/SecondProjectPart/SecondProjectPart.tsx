import css from './SecondProjectPart.module.css';
import sprite from '../../../images/sprite.svg';

const SecondProjectPart = () => {
  return (
    <div className={css.container}>
      <div className={css.titleContainer}>
        <p className={css.sitePartName}>ART</p>
        <p className={css.title}>
          CRYSTAL WALL OF CRYING &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;2021
        </p>
      </div>
      <div className={css.descriptionContainer}>
        <p className={css.description}>
          On October 6, a memorial ceremony for the victims of the Holocaust,
          dedicated to the 80th anniversary of the tragedy, was held in Babyny
          Yar. The presidents of Ukraine, Germany and Israel took part in the
          events. Artist Maryna Abramovych presented the new object of the Kyiv
          Memorial - "Crystal Wall of Crying". The wall, which refers to the
          Western Wall in Jerusalem, consists of Ukrainian anthracite and rock
          quartz crystals brought from Brazil. Its length is 40 meters, its
          height is three meters.
        </p>
        <button className={css.seeMoreButton} type="button">
          SEE MORE &nbsp;
          <svg className={css.rightArrow}>
            <use xlinkHref={`${sprite}#icon-button-right-arrow`} />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SecondProjectPart;
