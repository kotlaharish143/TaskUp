import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';
import {ThemeContext} from '../contexts/ThemeContext'

import { AuthContext } from '../contexts/AuthContext';
import { model } from 'mongoose';

const Navbar = () => {
  const { books } = useContext(BookContext);
  const {light,dark,isLight,setTheme}= useContext(ThemeContext);
  const {dispTodo,setDisp,setMode,mode}=useContext(AuthContext)
  const theme= isLight?light:dark;
  const styles={
      backgroundColor: theme.ui,
      color:theme.text
  }


      const account=(dispTodo)=>{
          if(dispTodo){
            setDisp(false)
          }
          else{
            
          }
      }
  
const modey=(mode)=>{
  setMode(!mode)
 
}


  return (
    <div className="navbar" style={styles}>
      <h1 >ToDo List</h1>
      {dispTodo ? (<p>Currently you have {books.length} tasks to be done...</p>):<p>Hey Buddy! Login and Start Working</p>}
      <ul className="list" >
  <li onClick={()=>{dispTodo?account(dispTodo):modey(mode)}}>{dispTodo ?"Log Out":mode ? "Create Account " : "Log in"}</li>
        <li  onClick={()=>{setTheme(!isLight)} }>Change Theme</li>
      </ul>
    </div>
  );
}
 
export default Navbar;