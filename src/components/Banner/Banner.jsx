import css from './Banner.module.css';
import firstImage from '../../images/banner_first_2x.png';
import secondImage from '../../images/banner_second_2x.png';

const Banner = () => {
  return (
    <div className={css.container}>
      <h1 className={css.heading}>
        <img
          className={css.firstImage}
          src={firstImage}
          alt="Marina Abramović"
        ></img>
        <span className={css.headingFirstWord}>Marina</span>
        <span className={css.headingSecondWord}>Abramović</span>
        <span className={css.headingLastWord}>Biography</span>
        <img
          className={css.secondImage}
          src={secondImage}
          alt="Marina Abramović"
        ></img>
      </h1>
      <p className={css.description}>
        Serbian conceptual and performance artist.
      </p>
    </div>
  );
};

export default Banner;
