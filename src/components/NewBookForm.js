import React, { useContext, useState } from 'react';
import { BookContext } from '../contexts/BookContext';
import {ThemeContext} from '../contexts/ThemeContext'
import {v4 as uuid} from 'uuid'
const axios=require('axios')
const NewBookForm = () => {
  const { addBook } = useContext(BookContext);
  const {light,dark,isLight}= useContext(ThemeContext);
  const theme= isLight?light:dark;
  const styles={
      backgroundColor:theme.ui,
      color:theme.text
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
    axios.patch('/api/update/kotlaharish1@gmail.com',det )
    .then(function (response) {
      console.log(response);
    })
    setTitle('');
    setAuthor('');
  }

  return (
    <form onSubmit={handleSubmit}>
      
      <input style={styles}  type="text" placeholder="Task" value={title}
        onChange={(e) => setTitle(e.target.value)} />
      <input style={styles} type="text" placeholder="Message" value={author}
        onChange={(e) => setAuthor(e.target.value)} />
      <input type="submit" value="Add task" />
    </form>
  );
}
 
export default NewBookForm;