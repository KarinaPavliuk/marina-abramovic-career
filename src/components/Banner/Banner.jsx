import css from './Banner.module.css';
import firstImage from '../../images/banner_first_2x.png';
import secondImage from '../../images/banner_second_2x.png';

const Banner = () => {
  return (
    <div className={css.container}>
      <img
        className={css.firstImage}
        src={firstImage}
        alt="Marina Abramović"
      ></img>
      <h1 className={css.heading}>
        <span>Marina</span>
        <span>Abramović</span>
        <span className={css.headinLastWord}>Biography</span>
      </h1>
      <p className={css.bannerDescription}>
        Serbian conceptual and performance artist.
      </p>
      <img
        className={css.secondImage}
        src={secondImage}
        alt="Marina Abramović"
      ></img>
    </div>
  );
};

export default Banner;
