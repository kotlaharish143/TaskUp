import React,{useState, createContext, useEffect} from 'react'
export const AuthContext= createContext();


 function AuthContextProvider(props) {

    const [dispTodo,setDisp]= useState(false)
    const [authId,setAuth]=useState()
         

    return (
        <AuthContext.Provider value={{dispTodo,setDisp,setAuth,authId}}>
            
         {props.children}
        </AuthContext.Provider>
        )
}
export default AuthContextProvider