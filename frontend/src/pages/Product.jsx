import styled from "styled-components"
import Navbar from '../components/Navbar'
import Announcenent from '../components/Announcement'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'
import {Remove,Add} from '@mui/icons-material'
import {mobile} from '../responsive'
import { useLocation } from "react-router-dom"
import { PUBLIC_REQUEST } from "../../config"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { addProduct } from "../redux/cartRedux"


const Container = styled.div`

`
const Wrapper = styled.div`
padding: 50px;
display: flex;
${mobile({ padding: "10px", flexDirection:"column" })}
`
const ImgContainer = styled.div`
flex: 1;

`
const Image = styled.img`
width: 100%;
height: 90vh;
object-fit: contain;
${mobile({ height: "40vh" })}
`
const InfoContainer = styled.div`
flex: 1;
padding: 0px 50px;
${mobile({ padding: "10px" })}
`
const Title = styled.h1`
font-weight: 200;
`
const Desc = styled.p`
margin: 20px 0px;
`

const Price = styled.span`
font-weight: 100;
font-size: 40px;
`
const FilterContainer =styled.div`
width: 50%;
margin: 30px 0px;
display: flex;
justify-content: space-between;
${mobile({ width: "100%" })}

`
const Filter = styled.div`
display: flex;
align-items:center;
`
const FilterTittle = styled.span`
`
const FilterColor = styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
border:2px solid black;
background-color: ${(props) => props.color};
margin: 0 5px;
cursor: pointer;

`
const FilterSize = styled.select`
margin-left: 10px;
padding: 5px;
&:hover{
  background: lightgray;
}
`
const FilterSizeOption = styled.option`
`
const AddContainer = styled.div`
width: 50%;
display: flex;
align-items: center;
justify-content: space-between;
${mobile({ width: "100%" })}
`
const AmountContainer = styled.div`
display: flex;
align-items: center;
font-weight: 700;
`
const Amount = styled.div`
border: 2px solid teal;
padding: 5px;
border-radius: 10px;
margin:15px;
`

const Button = styled.button`
border: 2px solid teal;
border-radius: 5px;
background-color: white;
padding: 8px;
font-weight: 700;
transition: all .3s;
&:hover{
  background-color:green;

  color: white;
}
`

const Product = () => {
  const location = useLocation()
  const id = location.pathname.split('/')[2];
  const[getProductById,setGetProductById] = useState([])
  const[cartCount,setCartCount] = useState(1)
  const [color,setColor] = useState("")
  const [size,setSize] = useState("")
  const dispatch = useDispatch()
  
  const cartChange = (res) => {
    if(res === 'inc'){
      setCartCount(cartCount + 1)
    }
    else if(res === 'dec'){
       cartCount > 1 && setCartCount(cartCount - 1)
    }
  }
  
  useEffect(()=>{
    
      const getProduct = async () => {
        try{
        const res = await PUBLIC_REQUEST.get(`/product/${id}`)
        setGetProductById(res.data)
      }

  
    catch(err){
      console.log(err);
    }
  }
   
    getProduct ()
  },[id])

  const handleAddToCart = () =>{
    dispatch(
      addProduct({...getProductById,quantity:cartCount,color,size})
    )
  }
  
  return (
    <Container>
      <Navbar/>
      <Announcenent/>
      <Wrapper>
        <ImgContainer>
          <Image src={getProductById.image}/>
        </ImgContainer>
        <InfoContainer>
          <Title>{getProductById.title}</Title>
          <Desc>{getProductById.desc}</Desc>
          <Price>{getProductById.price}</Price>

          <FilterContainer>
          <Filter>
            <FilterTittle>Color</FilterTittle>
            {getProductById?.color?.map((c)=>(
               <FilterColor color={c} key={c} onClick={()=> setColor(c)}/>
            ))}
           
           
          </Filter>
          <Filter>
            <FilterTittle>Size</FilterTittle>
            <FilterSize onChange={(e)=>setSize(e.target.value)}>
              {getProductById?.size?.map((s)=>(
                
                 <FilterSizeOption>{s}</FilterSizeOption>
              ))}
             
            </FilterSize>
            
          </Filter>
        </FilterContainer>
        <AddContainer>
          <AmountContainer>
            <Remove style={{border:'1px solid black',fontSize:'15px'}} onClick={()=>cartChange('dec')}/>
            <Amount>{cartCount}</Amount>
            <Add style={{border:'1px solid black',fontSize:'15px'}} onClick={()=>cartChange('inc')}/>
          </AmountContainer>
          <Button onClick={handleAddToCart}>Add To Cart</Button>
        </AddContainer>
        </InfoContainer>
       
      </Wrapper>
      <NewsLetter/>
      <Footer/>
    </Container>
  )
}

export default Product
