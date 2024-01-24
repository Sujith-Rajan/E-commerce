import { useState } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import './login.css'
import { login } from '../../redux/apiCall'


const Login = () => {

    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    const dispatch = useDispatch()
    const {isFetching,error,errorMessage} = useSelector((state) => state.user || {})
    const handleLogin = (e) =>{
        e.preventDefault()
        login(dispatch,{username,password}) 
        
    }
  return (
    <div className='loginContainer'>
        <h1>Login</h1>
      <input type="email" placeholder='username' onChange={(e)=> setUsername(e.target.value)}/>
      <input type="password" placeholder='password' onChange={(e)=> setPassword(e.target.value)} />
      {error && <span>{errorMessage}</span> }
      
      <button onClick={handleLogin} disabled={isFetching}>Sign in</button>
      
      
    </div>
  )
}

export default Login
