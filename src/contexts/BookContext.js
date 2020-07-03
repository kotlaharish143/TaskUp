import React, { createContext, useState,useEffect } from 'react';
import { AuthContext } from './AuthContext';


const axios= require('axios')
export const BookContext = createContext();

const BookContextProvider = (props) => {
 

    

  const [books, setBooks] = useState([]);
  
  const addBook = (title, author,id) => {
    setBooks([...books, {title, author, id: id}]);
  };
 
 
  

 

  return (
    <BookContext.Provider value={{ books,setBooks, addBook}}>
      {props.children}
    </BookContext.Provider>
  );
}
 
export default BookContextProvider;