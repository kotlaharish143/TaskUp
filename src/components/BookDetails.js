import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

const BookDetails = ({ book }) => {
  const { removeBook } = useContext(BookContext);
  return (
    <li onClick={() => removeBook(book.id)}>
      <div className="title">{book.task}</div>
      <div className="author">{book.message}</div>
    </li>
  );
}

export default BookDetails;