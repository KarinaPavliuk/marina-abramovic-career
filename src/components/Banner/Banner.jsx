import css from './Banner.module.css';

const Banner = () => {
  return (
    <div className={css.container}>
      <h1 className={css.heading}>
        <span>Marina</span>
        <span>Abramović</span>
        <span className={css.headinLastWord}>Biography</span>
      </h1>
      <p className={css.bannerDescription}>
        Serbian conceptual and performance artist.
      </p>
      <img
        className={css.bannerImage}
        src={'../../images/banner_1.png'}
        alt="Marina Abramović"
      ></img>
      <img
        className={css.bannerImage}
        src="../../images/banner_2.png"
        alt="Marina Abramović"
      ></img>
    </div>
  );
};

export default Banner;
