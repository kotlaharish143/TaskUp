import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';
import {ThemeContext} from '../contexts/ThemeContext'
import { Cursor } from 'mongodb';

const Navbar = () => {
  const { books } = useContext(BookContext);
  const {light,dark,isLight,setTheme}= useContext(ThemeContext);
  const theme= isLight?light:dark;
  const styles={
      backgroundColor:theme.bg,
      color:theme.text
  }
  return (
    <div className="navbar" style={styles}>
      <h1 >ToDo List</h1>
      <p>Currently you have {books.length} tasks to be done...</p>
      <ul className="list" >
        <li>Login</li>
        <li  onClick={()=>{setTheme(!isLight)} }>Change Theme</li>
      </ul>
    </div>
  );
}
 
export default Navbar;