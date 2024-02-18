import css from './SubscribePart.module.css';

const SubscribePart = () => {
  return (
    <div className={css.subscribePartContainer}>
      <p>Subscibe to Our Newsletter</p>
      <p>Get weekly update about our product on your email, no spam guaranteed we promise.</p>
      <form >
        <input type="text" placeholder='youremail123@domain.com'></input>
        <button type='submit'>SUBSCRIBE</button>
      </form>
    </div>
  )
}

export default SubscribePart;