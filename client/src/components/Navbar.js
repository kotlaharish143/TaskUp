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
      backgroundColor: theme.bg,
      color:theme.text
  }
  const styles2={
    backgroundColor: theme.ui,
    color:theme.text,
    marginRight:5
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
    <div className="navbar d-flex justify-content-center" style={styles}>
      <div class="top d-flex-column">
      <h1 >Task manager</h1>
      {dispTodo ? (<p>Currently you have {books.length} tasks to be done...</p>):<p>Hey buddy! login and start working</p>}
     
      <ul className="list" >
  <button class="btn " style={styles2} onClick={()=>{dispTodo?account(dispTodo):modey(mode)}}>{dispTodo ?"Log Out":mode ? "create account " : "log in"}</button>
        <button  class="btn " style={styles2} onClick={()=>{setTheme(!isLight)} }>change theme</button>
      </ul>
    </div>
    </div>
  );
}
 
export default Navbar;