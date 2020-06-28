import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

const Navbar = () => {
  const { books } = useContext(BookContext);
  return (
    <div className="navbar">
      <h1>ToDo List</h1>
      <p>Currently you have {books.length} tasks to be done...</p>
    </div>
  );
}
 
export default Navbar;