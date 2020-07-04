import React,{useState,useContext} from "react"
import {ThemeContext} from '../contexts/ThemeContext'
import { AuthContext } from "../contexts/AuthContext"
const axios=require('axios')
const Login=()=>{
const [email,setEmail]=useState()
const [password,setPassword]=useState()

const {dispTodo,setDisp,setAuth,mode,setMode}=useContext(AuthContext)
const {light,dark,isLight}= useContext(ThemeContext);
  const theme= isLight?light:dark;
  const styles={
      backgroundColor:theme.ui,
      color:theme.text
  }
 
const handleSubmit2=(e)=>{
  e.preventDefault()
const data={
  email:email,
  password:password
}
   
  axios.post('http://localhost:8080/api/create',data

).then((res)=>{console.log(res);
{setAuth(email)}setDisp(!dispTodo);}).catch((err)=>{console.log(err);
})
setMode(!mode)
}

const handleSubmit=(e)=>{
e.preventDefault()

   
      axios.get('http://localhost:8080/api/login/email/'+email+'/password/'+password,{
  
}).then((res)=>{console.log(res);
{setDisp(!dispTodo);setAuth(email)}}).catch((err)=>{console.log(err);
console.log("jampandu")})


}
    return !dispTodo && mode ? (<form onSubmit={handleSubmit}>
      <input style={styles}  type="text" placeholder="Email" value={email}
        onChange={(e) => setEmail(e.target.value)} />
      <input style={styles} type="text" placeholder="password" value={password}
        onChange={(e) => setPassword(e.target.value)} />
      <input style={styles}  type="submit" value="Log in" />
    </form>
    ):!dispTodo && !mode ? (<div><form onSubmit={handleSubmit2}>
      <input style={styles}  type="text" placeholder="Email" value={email}
        onChange={(e) => setEmail(e.target.value)} />
      <input style={styles} type="text" placeholder="Set a password" value={password}
        onChange={(e) => setPassword(e.target.value)} />
      <input style={styles}  type="submit" value="Sign up" />
     
    </form></div>):<h6>logged in</h6>

}
export default Login