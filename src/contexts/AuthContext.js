import React,{useState, createContext} from 'react'
export const AuthContext= createContext();


 function AuthContextProvider(props) {

    const [dispTodo,setDisp]= useState(false)
    return (
        <AuthContext.Provider value={{dispTodo,setDisp}}>
            
         {props.children}
        </AuthContext.Provider>
        )
}
export default AuthContextProvider