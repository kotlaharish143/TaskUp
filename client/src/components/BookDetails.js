import React, { useContext,useEffect } from 'react';
import axios from 'axios'
import { BookContext } from '../contexts/BookContext';
import {ThemeContext} from '../contexts/ThemeContext'
import BookList from './BookList';
import { AuthContext } from '../contexts/AuthContext';
const BookDetails = ({ book }) => {
 
  const {books,setBooks}= useContext(BookContext);
  const {authId,refresh}=useContext(AuthContext)
  console.log(authId)
  const {light,dark,isLight}= useContext(ThemeContext);
  const theme= isLight?light:dark;
  const styles={
      backgroundColor:theme.ui,
      color:theme.text,
    margin:20}
      const styles2={
        backgroundColor: theme.ui,
        color:theme.text,
       
      }
      var data=[]
      function Axios(){
       axios({
         method: "GET",
         url: '/api/'+authId
     
       }).then(function (res) {
         console.log(res.data[0].todo)
         data=res.data[0].todo
         setBooks(data)
       })
      }
 
      const removeBook = async (id) => {
        AxiosDel(id)
        Axios()
        console.log("deleted")
      }
    
      async function AxiosDel(id){
        await axios.patch('/api/update/email/'+authId+'/id/'+id).then(function (res) {
         
         console.log(res)
        })
        
        .catch(function(error){
        console.log("pani avvatla")
        })
       }

       


  
  return (
    <li onClick={() => removeBook(book.id)} style={styles}>
      <div className="title" style={styles2}>{book.task}</div>
      <div className="author" style={styles2}>{book.message}</div>
    </li>
  );

  }

export default BookDetails;