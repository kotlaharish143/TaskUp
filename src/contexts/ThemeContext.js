import React, { createContext, useState,} from 'react';



export const ThemeContext= createContext();

const ThemeContextProvider=(props)=>{
    
    const [light]=useState({bg:'#e58e26',text:'black',ui:'#badc58'}

    )
    const [dark]=useState({
        bg:'#e58e26',text:'#fff',ui:'#018786'
        })
        const [isLight,setTheme]=useState(true)
       
         
    return(
        <ThemeContext.Provider value={{light,dark,isLight,setTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}
export default ThemeContextProvider