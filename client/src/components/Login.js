import React,{useState,useContext} from "react"
import {ThemeContext} from '../contexts/ThemeContext'
import { AuthContext } from "../contexts/AuthContext"
const axios=require('axios')
const Login=()=>{
const [email,setEmail]=useState()
const [password,setPassword]=useState()
const [nouser,setNouser]=useState(0)
const {dispTodo,setDisp,setAuth,mode,setMode}=useContext(AuthContext)
const {light,dark,isLight}= useContext(ThemeContext);
  const theme= isLight?light:dark;
  const styles={
      backgroundColor:theme.bg,
      color:theme.ui
  }
  const styles2={
    backgroundColor: theme.ui,
    color:theme.text,
   
  }
 
const handleSubmit2=(e)=>{
  e.preventDefault()
const data={
  email:email,
  password:password
}
   
  axios.post('/api/create',data

).then((res)=>{console.log(res);
{setDisp(!dispTodo);setAuth(email)}}).catch((err)=>{console.log(err);
})
setMode(!mode)
}

const handleSubmit=async (e)=>{
e.preventDefault()

   
  const res= await    axios.get('/api/login/email/'+email+'/password/'+password,{
  
}).catch((err)=>{
    setNouser(1)
    
  })
  if(res){
    setNouser(0)
    setDisp(!dispTodo)
    ;setAuth(email)
  }

}



    return !dispTodo && mode ? (<form class="text-center" style={styles} onSubmit={handleSubmit}>
      <input style={styles2}  type="text" placeholder="Email" value={email}
        onChange={(e) => setEmail(e.target.value)} required/>
      <input style={styles2} type="text" placeholder="password" value={password}
        onChange={(e) => setPassword(e.target.value)} required/>
      <input type="submit" style={styles2} class="btn" value="login" />
      <span class="text-danger boldtext">{(nouser)?"User not found please sign up":''}</span>
    </form>
    ):(!dispTodo && !mode) ? (<div><form  style={styles} onSubmit={handleSubmit2}>
     
      <input style={styles2}  type="text" placeholder="Email" value={email}
        id="email" onChange={(e) => setEmail(e.target.value)} required/>
      
      <input style={styles2} type="text" placeholder="Set a password" value={password}
        onChange={(e) => setPassword(e.target.value)} required/>
      <input type="submit" style={styles2} class="btn" value="sign up" />
     
    </form></div>):<></>

}
export default Login