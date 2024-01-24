import React, { useState } from 'react'
import styled from 'styled-components'
import banner from '../assets/images/login.jpg'
import {mobile} from '../responsive'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../redux/apiCalls'

const Container = styled.div`
width: 100dvw;
height: 100dvh;
background:linear-gradient(
  rgba(255, 255, 255, 0.5),
  rgba(255, 255, 255, 0.3)
), url(${banner});
background-size:100% 100%;  

display:flex;
align-items: center;
overflow: hidden;
justify-content: center;
${mobile({background:"orange"})}

`
const Wrapper = styled.div`
width: 30%;
border-radius: 10px;

padding: 20px;
background-color: rgba(255,255,255,0.5);
box-shadow: 1px 0px 3px black;
text-align: center;
${mobile({width: "70%"})}
`
const Title = styled.h1`
font-size: 24px;
font-weight: 300;
${mobile({color: "white"})}
`
const Form = styled.form`
display:flex;
flex-direction: column;
`
const Input = styled.input`
flex: 1;
width:100%;
min-width: 40%;
margin: 20px 10px 0 0;
padding: 5px;
outline-color: teal;
border:none;
border-radius: 5px;
`

const Button = styled.button`
width: 30%;
cursor: pointer;
border: none;
padding: 15px 20px;
border-radius: 8px;
transition: all .5s;
margin-top: 10px;
margin-left: auto;
margin-right: auto;
&:hover{
  background-color: teal;
  color: white;
  
}
`
const Error = styled.span`
  color: red;
  font-size: 12px;
`;

const Label = styled.label`
color: gray;
font-size: 12px;
text-decoration: underline;
&:hover{
  color: blue;
  cursor: pointer;
  text-decoration: none;
}
`
const linkStyle = {
  margin: "1rem",
  textDecoration: "none",
  color: 'blue'
  
};

const Login = () => {
  const [username, setUserName] = useState("")
  const [password,setPassword] = useState("")
  const dispatch = useDispatch()
  const {isFetching,error,errorMessage} = useSelector((state) => state.user)

  const handleLogin = (e) =>{
    e.preventDefault()
    login(dispatch,{username,password})
   
  }
  return (
    <Container>
        <Wrapper>
            <Title>SIGN IN</Title>
            <Form>
                <Input placeholder='Email Address' type='email' onChange={(e) => setUserName(e.target.value)}/>
                <Input placeholder='Password' type='password' onChange={(e) => setPassword(e.target.value)}/>
                <Button onClick={handleLogin} disabled={isFetching}>LOGIN</Button>
                {error && <Error>{errorMessage}</Error>}
                <Label>Forget your password?</Label>
                <Link to='/signup' style={linkStyle}  >
               Create an account  ?
                </Link>
            </Form>
            
        </Wrapper>
      
    </Container>
  )
}

export default Login
