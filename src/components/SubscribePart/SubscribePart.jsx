import css from './SubscribePart.module.css';
import sprite from '../../images/sprite.svg';

const SubscribePart = () => {
  return (
    <div className={css.container}>
      <p className={css.title}>SUBSCIBE TO OUR NEWSLETTER</p>
      <p className={css.description}>
        Get weekly update about our product on your email, no spam guaranteed we
        promise.
      </p>
      <form className={css.form}>
        <div className={css.inputWrap}>
          <input
            className={css.input}
            type="text"
            placeholder="youremail123@domain.com"
          ></input>
          <svg className={css.mailIcon}>
            <use xlinkHref={`${sprite}#icon-mail`} />
          </svg>
        </div>
        <button className={css.button} type="submit">
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
};

export default SubscribePart;
