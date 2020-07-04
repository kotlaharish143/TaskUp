wimport React, { createContext, useState,} from 'react';



export const ThemeContext= createContext();

const ThemeContextProvider=(props)=>{
    
    const [light]=useState({bg:'#pasass',text:'yellow',ui:'#CFE5CF'}

    )
    const [dark]=useState({
        bg:'#dc2430',text:'#fff',ui:'#018786'
        })
        const [isLight,setTheme]=useState(true)
       
         
    return(
        <ThemeContext.Provider value={{light,dark,isLight,setTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}
export default ThemeContextProvider
