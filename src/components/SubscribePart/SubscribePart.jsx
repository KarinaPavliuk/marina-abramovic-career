import css from './SubscribePart.module.css';
import sprite from '../../images/sprite.svg';

const SubscribePart = () => {
  function handleSubmit(event) {
    event.preventDefault();
    alert('success!');
  }

  return (
    <div>
      <div className={css.horizontalLine}>
        <p className={css.horizontalLineText}>
          WHEN PEOPLE ASK ME WHERE I WAS BORN, I NEVER SAY "IN SERBIA". I'M FROM
          A COUNTRY THAT NO LONGER EXISTS.
        </p>
      </div>
      <div className={css.container}>
        <p className={css.title}>SUBSCIBE TO OUR NEWSLETTER</p>
        <p className={css.description}>
          Get weekly update about our product on your email, no spam guaranteed
          we promise.
        </p>
        <form className={css.form} onSubmit={handleSubmit}>
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
    </div>
  );
};

export default SubscribePart;
