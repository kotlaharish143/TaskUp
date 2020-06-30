import React,{useContext}from "react";
import Navbar from "./components/Navbar";
import BookContextProvider from "./contexts/BookContext";
import BookList from "./components/BookList";
import NewBookForm from "./components/NewBookForm";
import ThemeContextProvider from "./contexts/ThemeContext";
import {ThemeContext} from './contexts/ThemeContext'
function App() {
 

  return (
    <div className="App" >
      <BookContextProvider>
        <ThemeContextProvider>
        <Navbar />
       
        <BookList />
        <NewBookForm />
        </ThemeContextProvider>
      </BookContextProvider>
      
    </div>
  );
}

export default App;
