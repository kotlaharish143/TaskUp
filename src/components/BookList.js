import React, { useContext } from 'react';
import BookDetails from './BookDetails';
import { BookContext } from '../contexts/BookContext';
import {ThemeContext} from '../contexts/ThemeContext'

const BookList = () => {
  const { books } = useContext(BookContext);
  const {light,dark,isLight,setTheme}= useContext(ThemeContext);
  const theme= isLight?light:dark;
  const styles={
      backgroundColor:theme.bg,
      color:theme.text
  }
  return books.length ? (
    <div className="book-list" style={styles} >
      <ul>
        {books.map(book => {
          return ( <BookDetails book={book} key={book.id} /> );
        })}
      </ul>
    </div>
  ) : (
    <div className="empty">No Pending Tasks. Hello free time :).</div>
  );
}

export default BookList;