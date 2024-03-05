import css from './Books.module.css';
import sprite from '../../images/sprite.svg';
import books from '../../data/books.json';
import theCleaner from '../../images/books/book-the-cleaner.png';
import walkThroughWalls from '../../images/books/book-walk-through-walls.png';
import sevenDeaths from '../../images/books/book-7-deaths-of-maria-callas.png';

const Books = () => {
  return (
    <div className={css.container}>
      <p className={css.sitePartName}>BOOKS</p>
      <ul className={css.list}>
        {books.map(({ id, image, title, description }) => (
          <li className={css.listItem} key={id}>
            <img className={css.image} src={image} alt={`book ${title}`} />
            <div className={css.underImageText}>
              <p className={css.title}>
                {title}
                <svg className={css.arrowIcon}>
                  <use xlinkHref={`${sprite}#icon-slider-up-arrow`} />
                </svg>
              </p>
              <p className={css.description}>{description}</p>
            </div>
          </li>
        ))}

        {/* <li className={css.listItem}>
          <img className={css.image} src={theCleaner} alt="book The Cleaner" />
          <div className={css.underImageText}>
            <p className={css.title}>
              THE CLEANER
              <svg className={css.arrowIcon}>
                <use xlinkHref={`${sprite}#icon-slider-up-arrow`} />
              </svg>
            </p>
            <p className={css.description}>
              At once radical, controversial and revered, Marina Abramovic is
              one of the most discussed artists today. Famous for her
              groundbreaking performance works, she continues...
            </p>
          </div>
        </li> */}

        {/* <li className={css.listItem}>
          <img
            className={css.image}
            src={walkThroughWalls}
            alt="book Walk Through Walls"
          />
          <div className={css.underImageText}>
            <p className={css.title}>
              WALK THROUGH WALLS
              <svg className={css.arrowIcon}>
                <use xlinkHref={`${sprite}#icon-slider-up-arrow`} />
              </svg>
            </p>
            <p className={css.description}>
              “I had experienced absolute freedom—I had felt that my body was
              without boundaries, limitless; that pain didn’t matter, that
              nothing mattered at all—and it intoxicated me.”
            </p>
          </div>
        </li> */}

        {/* <li className={css.listItem}>
          <img
            className={css.image}
            src={sevenDeaths}
            alt="book 7 Deaths of Maria Callas"
          />
          <div className={css.underImageText}>
            <p className={css.title}>
              7 DEATHS OF MARIA CALLAS
              <svg className={css.arrowIcon}>
                <use xlinkHref={`${sprite}#icon-slider-up-arrow`} />
              </svg>
            </p>
            <p className={css.description}>
              Here Abramovic turns her focus to renowned opera singer Maria
              Callas, whose stunning soprano voice captivated audiences around
              the world in the mid-20th century...
            </p>
          </div>
        </li> */}
      </ul>
    </div>
  );
};

export default Books;
