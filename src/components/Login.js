import React,{useState,useContext} from "react"
import {ThemeContext} from '../contexts/ThemeContext'
import { AuthContext } from "../contexts/AuthContext"
const axios=require('axios')
const Login=()=>{
const [email,setEmail]=useState()
const [password,setPassword]=useState()
const {dispTodo,setDisp,setAuth}=useContext(AuthContext)
const {light,dark,isLight}= useContext(ThemeContext);
  const theme= isLight?light:dark;
  const styles={
      backgroundColor:theme.ui,
      color:theme.text
  }


const handleSubmit=(e)=>{
e.preventDefault()

   
      axios.get('http://localhost:8080/api/login/email/'+email+'/password/'+password,{
  
}).then((res)=>{console.log(res);
{setDisp(!dispTodo);setAuth(email)}}).catch((err)=>{console.log(err);
console.log("jampandu")})


}
    return !dispTodo ? (<form onSubmit={handleSubmit}>
      <input style={styles}  type="text" placeholder="Email" value={email}
        onChange={(e) => setEmail(e.target.value)} />
      <input style={styles} type="text" placeholder="password" value={password}
        onChange={(e) => setPassword(e.target.value)} />
      <input type="submit" value="Sign up" />
    </form>
    ):(<h6></h6>)

}
export default Login