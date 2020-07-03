import React,{useState, createContext, useEffect} from 'react'
export const AuthContext= createContext();


 function AuthContextProvider(props) {

    const [dispTodo,setDisp]= useState(false)
    const [authId,setAuth]=useState()
    const [mode,setMode]=useState(true)    

    return (
        <AuthContext.Provider value={{dispTodo,setDisp,setAuth,authId,mode,setMode}}>
            
         {props.children}
        </AuthContext.Provider>
        )
}
export default AuthContextProvider