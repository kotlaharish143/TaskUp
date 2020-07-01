import React from "react";
import Navbar from "./components/Navbar";
import BookContextProvider from "./contexts/BookContext";
import BookList from "./components/BookList";
import NewBookForm from "./components/NewBookForm";
import Login from "./components/Login";
import ThemeContextProvider from "./contexts/ThemeContext";

import AuthContextProvider from "./contexts/AuthContext";
function App() {
 

  return (
    <div className="App" >
     
        <BookContextProvider>
        <ThemeContextProvider>
       <AuthContextProvider>
        <Navbar />
        <BookList />
        <NewBookForm />
        <Login />
        </AuthContextProvider>
        </ThemeContextProvider>
      </BookContextProvider>
    
     
    </div>
  );
}

export default App;
