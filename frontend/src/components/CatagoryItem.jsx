import styled from "styled-components"
import {mobile} from '../responsive'
import { Link } from "react-router-dom"

const Container = styled.div`
flex:1;
margin:3px;
height: 65vh;
position: relative;
`
const Image = styled.img`
width: 100%;
height: 100%;
object-fit: contain;
${mobile({height: "45vh"})}
`
const Info = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
const Title = styled.h1`
color: white;
text-shadow:1px 2px 2px black;
margin-bottom: 20px;
${mobile({fontSize: "18px"})}
`
const Button = styled.button`
border: none;
padding:10px;
background-color: white;
color: gray;
cursor: pointer;
font-weight: 600;
border-radius: 15px;
transition: background-color 0.5s, color 0.5s;
&:hover{
    background-color: #6395e6;
    color: white;
    
}
`
const CatagoryItem = ({item}) => {
    
  return (
    <Container>
      <Link to={`/products/${item.cat}`}>
      <Image src={item.image}/>
      <Info>
        <Title>
            {item.title}
        </Title>
       <Button >SHOP NOW</Button>
      </Info>
      </Link>
    </Container>
  )
}

export default CatagoryItem
