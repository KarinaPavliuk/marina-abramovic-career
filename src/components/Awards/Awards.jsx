import css from './Awards.module.css';

const Awards = () => {
  return (
    <div className={css.awardsContainer}>
      <p className={css.sitePartName}>Awards</p>
      <ul className={css.awardsList}>
        <li className={css.awardListItem}>
          <p>Golden Lion, XLVII Venice Biennale</p>
          <p>1997</p>
        </li>
      </ul>
    </div>
  )
}

export default Awards;