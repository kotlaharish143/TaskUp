import React, { createContext, useState,} from 'react';



export const ThemeContext= createContext();

const ThemeContextProvider=(props)=>{
    
    const [light]=useState({bg:'white',text:'black',ui:'rgb(87 214 202)'}

    )
    const [dark]=useState({
        bg:'black',text:'#fff',ui:'#d25353'
        })
        const [isLight,setTheme]=useState(true)
       
         
    return(
        <ThemeContext.Provider value={{light,dark,isLight,setTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}
export default ThemeContextProvider
