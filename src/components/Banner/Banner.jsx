import css from './Banner.module.css';

const Banner = () => {
  return (
    <div className={css.bannerContainer}>
      <h1 className={css.bannerHeading}>
        <span>Marina</span>
        <span>Abramović</span>
        <span>Biography</span>
      </h1>
      <p className={css.bannerDescription}></p>
      <img className={css.bannerImage} src="#" alt="Marina Abramović"></img>
      <img className={css.bannerImage} src="#" alt="Marina Abramović"></img>
    </div>
  )
}

export default Banner;

