import React, { createContext, useState,useEffect } from 'react';


const axios= require('axios')
export const BookContext = createContext();

const BookContextProvider = (props) => {

var data=[]
 function Axios(){
  axios({
    method: "GET",
    url: '/api'

  }).then(function (res) {
    console.log(res.data[0].todo)
    data=res.data[0].todo
    setBooks(data)
  })
 }
    

  const [books, setBooks] = useState([]);
  
  const addBook = (title, author,id) => {
    setBooks([...books, {title, author, id: id}]);
  };
 
 
  

  const removeBook = (id) => {
  
    
    AxiosDel(id)
    console.log("deleted")
  }

  function AxiosDel(id){
    axios.delete('http://localhost:8080/api/delete/'+id).then(function (res) {
      Axios()
     console.log(res)
    })
    
    .catch(function(error){
    console.log("pani avvatla")
    })
   }
  useEffect(() => {
    Axios()
    console.log(" Get method is called ")
  }, [books.length])
 

  return (
    <BookContext.Provider value={{ books, addBook, removeBook }}>
      {props.children}
    </BookContext.Provider>
  );
}
 
export default BookContextProvider;