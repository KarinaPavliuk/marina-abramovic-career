import css from './Banner.module.css';
import firstImage from '../../images/banner_first_img.png';
import secondImage from '../../images/banner_second_img.png';

const Banner = () => {
  return (
    <div className={css.container}>
      <h1 className={css.heading}>
        <img
          className={css.firstImage}
          src={firstImage}
          alt="Marina Abramović"
        ></img>
        <span className={css.headingFirstWord}>MARINA</span>
        <span className={css.headingSecondWord}>ABRAMOVIĆ</span>
        <span className={css.headingLastWord}>BIOGRAPHY</span>
        <img
          className={css.secondImage}
          src={secondImage}
          alt="Marina Abramović"
        ></img>
        <p className={css.description}>
          Serbian conceptual and performance artist.
        </p>
      </h1>
    </div>
  );
};

export default Banner;
