import styled from "styled-components"
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { useState } from "react";
import {sliderItems} from '../data'
import {mobile} from '../responsive'

const Container = styled.div`
width: 100%;
height: 90vh;
display: flex;
background-color: orange;
position: relative;
overflow: hidden;
${mobile({display: 'none'})}
`
const Arrow = styled.div`
width: 50px;
height: 50px;
background-color: white;
border-radius: 50%;
display: flex;
  align-items: center;
  justify-content: center;
position: absolute;
top: 0;
bottom: 0;
left: ${(props) => props.direction === "left" && "10px"};
right: ${(props) => props.direction === "right" && "10px"};
margin: auto;
cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`
const Wrapper = styled.div`
height: 100%;
display: flex;
transition: all 1.5s ease;
transform: translateX(${(props) => props.slideIndex * -100}vw)
`
const Slide = styled.div`
    width:100vw;
    height:100vh;
    display:flex;
    align-items:center;
    background-color: #${(props) => props.bg}
`
const ImgContainer = styled.div`
    flex:1;
    height:100%;

`
const Image = styled.img`
    height:90%
`
const InfoContainer = styled.div`
    flex:1;
    padding: 50px;
`
const Title = styled.h1`
    font-size: 70px;
`
const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`
const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
    border-radius: 5px;
    transition: border 0.4s, color 0.5s;
    color:${(props) => props.slideIndex === 4 ? "gray" : "black"};
    &:hover{
     border: 2px solid #6395e6; 
     border-radius: 5px;
     color:${(props) => props.slideIndex === 4 ? "black" : "white"}; 
    }

`

const Slider = () => {
    const[slideIndex,setSlideIndex] = useState(0)
    const handleClick = (direction) => {
      if(direction === "left"){
        setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 4)
      }
      else{
        setSlideIndex(slideIndex < 4 ? slideIndex + 1 : 0)
      }

    }

  return (
   <Container>
    <Arrow direction="left" onClick={()=>handleClick("left")}>
    <ArrowLeftIcon/>
    </Arrow>
    <Wrapper slideIndex={slideIndex}>
      {sliderItems.map((item)=>(
         <Slide bg={item.bg} key={item.id}>
         <ImgContainer>
         <Image src={item.image} alt={item.title}/>
         </ImgContainer>
         <InfoContainer>
             <Title>{item.title}</Title>
             <Desc>{item.description}</Desc>    
              <Button slideIndex={slideIndex}>SHOW NOW</Button>
         </InfoContainer>
       </Slide>

      ))}
     
    </Wrapper>
    <Arrow direction="right" onClick={()=>handleClick("right")}>
    <ArrowRightIcon/>
    </Arrow>
   </Container>
  )
}

       

export default Slider
        
       
