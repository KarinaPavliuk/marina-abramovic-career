import css from './Awards.module.css';
import sprite from '../../images/sprite.svg';
import awards from '../../data/awards.json';
import { useState } from 'react';

const Awards = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const openDescription = (index: number) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  return (
    <div id="awards" className={css.container}>
      <p className={css.sitePartName}>AWARDS</p>
      <ul className={css.list}>
        {awards.map(({ title, time, description }, index) => (
          <li
            className={`${css.listItem} ${expandedIndex === index && css.heightAnimate}`}
            key={index}
            onClick={() => openDescription(index)}
          >
            <div className={css.listItemContent}>
              <div>
                <p className={css.title}>{title}</p>
                <p
                  className={`${css.description} ${expandedIndex === index && css.show}`}
                >
                  {description}
                </p>
              </div>
              <p className={css.time}>{time}</p>
            </div>

            <button
              type="button"
              className={`${css.toggleButton} ${expandedIndex === index && css.rotate}`}
            >
              <svg className={css.arrowIcon}>
                <use xlinkHref={`${sprite}#icon-list-down-arrow`} />
              </svg>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Awards;
