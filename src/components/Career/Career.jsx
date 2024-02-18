import css from './Career.module.css';

const Career = () => {
  return (
    <div className={css.careerContainer}>
      <p className={css.sitePartName}>Career</p>
      <p className={css.description}>In his performances, Abramovich shows human problems and problems created by people. In each of them, she demonstrates the capabilities of the human body, because the productions require considerable physical and psychological endurance. Because of this, Abramovich does not always take part in his own performances due to age and health, and prepares selected people for them, whom he teaches and trains in physical and psychological endurance.</p>
      <div className={css.gallaryContainer}>
        <ul>
          <li>
            <p className={css.location}>Dublin 1980</p>
            <img src="#" alt="Project Rest Energy"></img>
            <p className={css.projectName}>Rest Energy</p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Career;