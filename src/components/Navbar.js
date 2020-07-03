import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';
import {ThemeContext} from '../contexts/ThemeContext'

import { AuthContext } from '../contexts/AuthContext';

const Navbar = () => {
  const { books } = useContext(BookContext);
  const {light,dark,isLight,setTheme}= useContext(ThemeContext);
  const {dispTodo,setDisp}=useContext(AuthContext)
  const theme= isLight?light:dark;
  const styles={
      backgroundColor:theme.bg,
      color:theme.text
  }


      const account=(dispTodo)=>{
          if(dispTodo){
            setDisp(false)
          }
          else{
            
          }
      }
  
  return (
    <div className="navbar" style={styles}>
      <h1 >ToDo List</h1>
      {dispTodo ? (<p>Currently you have {books.length} tasks to be done...</p>):<p         >Hey Buddy! Login and Start Working</p>}
      <ul className="list" >
  <li onClick={()=>{account(dispTodo)}}>{dispTodo?"Log Out":"Create Account "}</li>
        <li  onClick={()=>{setTheme(!isLight)} }>Change Theme</li>
      </ul>
    </div>
  );
}
 
export default Navbar;