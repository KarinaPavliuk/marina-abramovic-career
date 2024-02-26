import css from './About.module.css';
import photoOneX from '../../images/about_1x.png';
import photoTwoX from '../../images/about_2x.png';

const About = () => {
  return (
    <div className={css.container}>
      <p className={css.sitePartName}>About</p>
      <div className={css.contentContainer}>
        <img className={css.image} src={photoTwoX} alt="Marina Abramović"></img>
        <div className={css.underImageContent}>
          <p className={css.underImageTitle}>Marina Abramović</p>
          <p className={css.description}>
            (born November 30, 1946, Belgrade, Yugoslavia now in Serbia),
            Yugoslav-born performance artist known for works that dramatically
            tested the endurance and limitations of her own body and mind.
            Abramović was raised in Yugoslavia by parents who fought as
            Partisans in World War II and were later employed in the communist
            government of Josip Broz Tito. In 1965 she enrolled at the Academy
            of Fine Arts in Belgrade to study painting. Eventually, however, she
            became interested in the possibilities of performance art,
            specifically the ability to use her body as a site of artistic and
            spiritual exploration.
          </p>
          <button className={css.seeMoreButton} type="button">
            See more
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
