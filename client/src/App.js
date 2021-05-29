import React,{useContext} from "react";
import Navbar from "./components/Navbar";
import BookContextProvider from "./contexts/BookContext";
import BookList from "./components/BookList";
import NewBookForm from "./components/NewBookForm";
import Login from "./components/Login";
import ThemeContextProvider, { ThemeContext } from "./contexts/ThemeContext";

import AuthContextProvider from "./contexts/AuthContext";
function App() {
  const {light,dark,isLight,setTheme}= useContext(ThemeContext);
  const theme= isLight?light:dark;
  console.log(theme)
  const styles={
      backgroundColor: theme.bg,
      
  }

  return (
    <div className="App card shadow " style={styles} >
     
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
