import css from './About.module.css';
import image from '../../images/about.png';
import sprite from '../../images/sprite.svg';

const About = () => {
  return (
    <div>
      <div className={css.container}>
        <p className={css.sitePartName}>ABOUT</p>
        <div className={css.contentContainer}>
          <img className={css.image} src={image} alt="Marina Abramović"></img>
          <div className={css.underImageContent}>
            <p className={css.underImageTitle}>MARINA ABRAMOVIĆ</p>
            <p className={css.description}>
              (born November 30, 1946, Belgrade, Yugoslavia now in Serbia),
              Yugoslav-born performance artist known for works that dramatically
              tested the endurance and limitations of her own body and mind.
              <br></br>
              <br></br>
              Abramović was raised in Yugoslavia by parents who fought as
              Partisans in World War II and were later employed in the communist
              government of Josip Broz Tito. In 1965 she enrolled at the Academy
              of Fine Arts in Belgrade to study painting. Eventually, however,
              she became interested in the possibilities of performance art,
              specifically the ability to use her body as a site of artistic and
              spiritual exploration.
            </p>
            <button className={css.seeMoreButton} type="button">
              SEE MORE &nbsp;
              <svg className={css.rightArrow}>
                <use xlinkHref={`${sprite}#icon-button-right-arrow`} />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <hr className={css.horizontalLine}></hr>
    </div>
  );
};

export default About;
