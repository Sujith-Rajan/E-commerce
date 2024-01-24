import React from 'react'
import styled from 'styled-components'
import banner from '../assets/images/register.jpg'
import {mobile} from '../responsive'
import { Link } from 'react-router-dom'

const Container = styled.div`
width: 100%;
height: 100vh;
background:linear-gradient(
  rgba(250, 250, 255, 0.4),
  rgba(255, 255, 255, 0.3)
), url(${banner});
background-size:100% 100%;  
display:flex;
align-items: center;
position: realative;
${mobile({background: 'orange'})}
`
const Wrapper = styled.div`
width: 30%;
position: absolute;
right:18%;
padding: 10px;
background-color: rgba(255,255,255,0.5);
border-radius: 10px;
box-shadow: 1px 0px 3px black;
text-align: center;
${mobile({right:'12.5% ',width: '75%'})}
`
const Title = styled.h1`
font-size: 24px;
font-weight: 300;
`
const Form = styled.form`
display:flex;
flex-wrap: wrap;
`
const Input = styled.input`
flex: 1;
min-width: 30%;
margin: 20px 10px 0 0;
padding: 10px;
border:none;
border-radius: 5px;
`
const Agreement = styled.span`
font-size: 12px;
margin: 20px 0;
`
const Button = styled.button`
width: 30%;
cursor: pointer;
border: none;
padding: 15px 20px;
border-radius: 8px;
transition: all .5s;
&:hover{
  background-color: teal;
  color: white;
  
}
`
const linkStyle = {
  marginLeft: "auto",
  marginRight:"auto",
  fontSize: "12px",
  color: 'blue',
  textAlign: "center",
  
};

const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>CREATE AN ACCOUNT</Title>
            <Form>
                <Input placeholder='First Name' />
                <Input placeholder='Last Name'/>
               
                <Input placeholder='Email'/>
                <Input placeholder='Password'/>
                <Input placeholder='Confirm Password'/>
                <Agreement>By creating an account, I consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b></Agreement>
                <Link to='/login' style={linkStyle}>Already i have an account</Link>
            </Form>
            <Button>CREATE</Button>
        </Wrapper>
      
    </Container>
  )
}

export default Register
