import css from './FirstProjectPart.module.css';
import sprite from '../../../images/sprite.svg';
import image from '../../../images/relation-in-time.png';

const FirstProjectPart = () => {
  return (
    <div className={css.container}>
      <p className={css.title}>RELATION IN TIME 1977</p>
      <img
        className={css.image}
        src={image}
        alt="Relation in Time Performance"
      />
      <button className={css.seeMoreButton} type="button">
        SEE MORE &nbsp;
        <svg className={css.rightArrow}>
          <use xlinkHref={`${sprite}#icon-button-right-arrow`} />
        </svg>
      </button>
    </div>
  );
};

export default FirstProjectPart;
