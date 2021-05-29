import React, { useContext, useState } from 'react';
import { BookContext } from '../contexts/BookContext';
import {ThemeContext} from '../contexts/ThemeContext'
import {AuthContext} from '../contexts/AuthContext'
import {v4 as uuid} from 'uuid'
const axios=require('axios')
const NewBookForm = () => {
  const { addBook } = useContext(BookContext);
  const {light,dark,isLight}= useContext(ThemeContext);
  const {dispTodo,authId} = useContext(AuthContext);
  const theme= isLight?light:dark;
  const styles={
      backgroundColor:theme.bg,
      color:theme.text
  }
  const styles2={
    backgroundColor: theme.ui,
    color:theme.text,
   
  }
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
 
  const handleSubmit = (e) => {
    e.preventDefault();
    const i=uuid()
    const det={
      task: title,
      message: author,
      id:i
    }
    console.log(det)
    addBook(title, author,i);
    axios.patch('/api/update/'+authId,det )
    .then(function (response) {
      console.log(response);
    })
    setTitle('');
    setAuthor('');
  }

  return dispTodo? (
    <form onSubmit={handleSubmit} style={styles} >
      
      <input style={styles2}  type="text" placeholder="Task" value={title}
        onChange={(e) => setTitle(e.target.value)} required/>
      <input style={styles2} type="text" placeholder="Message" value={author}
        onChange={(e) => setAuthor(e.target.value)} required/>
      <input style={styles2} type="submit" value="Add task" />
    </form>
  ):<div></div>
}
 
export default NewBookForm;
