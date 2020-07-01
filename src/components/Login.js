import React,{useState,useContext} from "react"
import {ThemeContext} from '../contexts/ThemeContext'
import { AuthContext } from "../contexts/AuthContext"
const axios=require('axios')
const Login=()=>{
const [email,setEmail]=useState()
const [password,setPassword]=useState()
const {dispTodo,setDisp}=useContext(AuthContext)
const {light,dark,isLight}= useContext(ThemeContext);
  const theme= isLight?light:dark;
  const styles={
      backgroundColor:theme.ui,
      color:theme.text
  }


const handleSubmit=(e)=>{
e.preventDefault()
var data={
    email:email,
    password:password
}
axios.post('/api/create',data).then((res)=>{console.log(res)}).catch((err)=>{console.log(err)})

setDisp(!dispTodo)
}
    return !dispTodo ? (<form onSubmit={handleSubmit}>
      <input style={styles}  type="text" placeholder="Email" value={email}
        onChange={(e) => setEmail(e.target.value)} />
      <input style={styles} type="text" placeholder="password" value={password}
        onChange={(e) => setPassword(e.target.value)} />
      <input type="submit" value="Sign up" />
    </form>
    ):(<h1>Logged In</h1>)

}
export default Login