import React, { createContext, useState,useEffect } from 'react';



export const ThemeContext= createContext();

const ThemeContextProvider=(props)=>{
    
    const [light,setLight]=useState({bg:'#E1FFC2',text:'black',ui:'#CFE5CF'}

    )
    const [dark,setDark]=useState({
        bg:'#192a56',text:'#fff',ui:'#018786'
        })
        const [isLight,setTheme]=useState(true)
       
         
    return(
        <ThemeContext.Provider value={{light,dark,isLight,setTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}
export default ThemeContextProvider