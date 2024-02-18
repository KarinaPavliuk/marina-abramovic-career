import css from './Books.module.css';

const Books = () => {
  return (
    <div className={css.booksContainer}>
      <p className={css.sitePartName}>Books</p>
      <ul className={css.booksList}>
        <li className={css.booksListItem}>
          <img src="#" alt="book The Cleaner" />
          <p>The Cleaner</p>
          <p>At once radical, controversial and revered, Marina Abramovic is one of the most discussed artists today. Famous for her groundbreaking performance works, she continues...</p>
        </li>
      </ul>

    </div>
  )
}

export default Books;