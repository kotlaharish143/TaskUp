import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';
import {ThemeContext} from '../contexts/ThemeContext'
const BookDetails = ({ book }) => {
  const { removeBook } = useContext(BookContext);

  const {light,dark,isLight}= useContext(ThemeContext);
  const theme= isLight?light:dark;
  const styles={
      backgroundColor:theme.ui,
      color:theme.text
  }
  return (
    <li onClick={() => removeBook(book.id)} style={styles}>
      <div className="title" style={styles}>{book.task}</div>
      <div className="author" style={styles}>{book.message}</div>
    </li>
  );
}

export default BookDetails;