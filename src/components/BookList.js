import React, { useContext,useEffect} from 'react';
import BookDetails from './BookDetails';
import axios from'axios'
import { BookContext } from '../contexts/BookContext';
import {ThemeContext} from '../contexts/ThemeContext'
import { AuthContext } from '../contexts/AuthContext';
import Axios from 'axios';

const BookList = () => {
  const { books,setBooks } = useContext(BookContext);
  const {light,dark,isLight}= useContext(ThemeContext);
  const {dispTodo,authId,mode}=useContext(AuthContext)
  const theme= isLight?light:dark;
  const styles={
      backgroundColor:theme.bg,
      color:theme.text
  }
 
  
  function Axios(authId){
    var data=[]
    if(authId){
    console.log("its called",authId)
   axios.get(
      'http://127.0.0.1:8080/api/'+authId
   ).then(function (res) {
     if(res.data[0]){
     console.log(res.data[0].todo)
     data=res.data[0].todo
     setBooks(data)}
   })
    }}
  

useEffect(() => {
  Axios(authId)
  console.log("rendering")
},[authId,books.length]
)

  return dispTodo ?(books.length ? (
    <div className="book-list" style={styles} >
      <ul>
        {books.map(book => {
          return ( <BookDetails book={book} key={book.id} /> );
        })}
      </ul>
    </div>
  ) : (
    <div className="empty">No Pending Tasks. Hello free time :).</div>
  )) : (
    <div className="jamba"><h1>{ (mode)?"Please Log In":"Create account"}</h1></div>
  )
}

export default BookList;