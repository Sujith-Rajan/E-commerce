import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import {Add,Remove} from '@mui/icons-material'
import {mobile} from '../responsive'
import { useSelector } from 'react-redux'
import { loadStripe } from '@stripe/stripe-js'
import { useEffect } from 'react'
import axios from 'axios'
import {USER_REQUEST} from '../../config.js'


const Container = styled.div`
 

`
const Wrapper = styled.div`
padding: 20px;
${mobile({padding: "8px"})}
`
const Title = styled.h1`
font-weight: 300;
text-align: center;
`
const Top = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 20px;
`
const TopButton = styled.button`
padding: 10px;
font-weight:600;
cursor: pointer;
border: ${(props)=> props.type === 'filled' && 'none'};
background-color:  ${(props)=> props.type === 'filled' ? 'black' : 'transperant'};
color:  ${(props)=> props.type === 'filled' && 'white'};
box-shadow: ${(props) => props.type === 'filled' ? 'none' : '1px 1px 2px black'}
`
const TopTexts = styled.div`
${mobile({display: "none"})}
`
const TopText = styled.span`
text-decoration: underline;
cursor: pointer;
margin: 0 10px;
`
const Bottom = styled.div`
display: flex;
justify-content: space-between;
${mobile({flexDirection: "column"})}
`
const Info = styled.div`
flex: 3;
`
const Product = styled.div`
dispaly: flex;
justify-content: space-between;
`
const ProductDetails = styled.div`
flex: 2;
display:flex;
`

const Image = styled.img`
width: 200px;
`
const Details = styled.div`
padding:20px;
display: flex;
flex-direction: column;
justify-content: space-around;
`
const Productname = styled.div``
const ProductId = styled.div`
`
const ProductColor = styled.div`
width: 20px;
height: 20px;
border-radius; 50%;
background-color: ${(props) => props.color}
`
const ProductSize = styled.div``

const PriceDetails = styled.div`
flex: 1;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
const ProductAmountContainer = styled.div`
display: flex;
align-items: center;
margin-bottom: 20px;
`
const ProductAmount = styled.div`
font-size: 24px;
margin: 5px;
${mobile({margin: "5px 15px"})}
`
const ProductPrice = styled.div`
font-size: 30px;
font-weight: 200;
${mobile({ marginBottom: "20px" })}
`

const Hr = styled.hr`
background-color: #eee;
border: none;
height: 1px;
`

const Summary = styled.div`
flex: 1;
border: 0.5px solid lightgray;
border-radius: 10px;
padding: 20px;
height: 50vh;
`
const SummaryItem = styled.div`
margin: 30px 0;
display: flex;
justify-content: space-between;
font-weight: ${(props) => props.type === "total" && "500"};
font-size: ${(props) => props.type === "total" && "24px"}
`
const SummaryTitle = styled.div`
font-weight: 200;
`
const SummaryItemText = styled.div``
const SummaryItemPrice = styled.div``

const Button = styled.button`
width: 100%;
padding: 10px;
background-color: green;
color: white;
font-weight: 600;
border:none;
transition: all .2s ease-in;
&:hover{
    transform: scale(1.1);
}

`

const Cart = () => {
    const {products,quantity,total} = useSelector(state => state.cart)
   
    
    const makePayment = async () => {
        try {
        const stripe = await loadStripe("pk_test_51OFWEhSE5KERzTDtsQh3JkiDK1bwVASTgXcPoFNVyL7GBJ15kp9D8CCWdm6yRpowZEukNtZVOf3udFDfoL1tJL8t007SSiuROY");
    
       
        const body = {
            products: {
                
                "productDetails": 'Total amount in Cart',
                "price": total,
                "qnty": quantity,
                 "cart":products
            }
        };
    
        const headers = {
            "Content-Type": "application/json"
        };
    
       
            const response = await USER_REQUEST.post("payment/create-checkout-session", body, { headers });
    
            const session = response.data;
           console.log(session)
            const result =await stripe.redirectToCheckout({
                sessionId: session.id
            });
            result.then((redirectResult) => {
                if (redirectResult.error) {
                    console.log(redirectResult.error);
                } else {
                    console.log(redirectResult);
                
                }
            });
        } catch (error) {
            console.error("An error occurred:", error);
        }
    };
    


  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
        <Title>Your Cart</Title>
        <Top>
            <TopButton>Continue Shopping</TopButton>
            <TopTexts>
                <TopText>Shopping Cart({quantity})</TopText>
                <TopText>Wishlist(1)</TopText>
            </TopTexts>
            <TopButton type='filled'>Checkout Now</TopButton>
        </Top>
        <Bottom>
            <Info>
                {products?.map((product)=>(
                    <Product>
                    <ProductDetails>
                        <Image src={product.image}/>
                        <Details>
                            <Productname><b>Product:</b>{product.title}</Productname>
                            <ProductId><b>ID:</b>{product._id}</ProductId>
                            <ProductColor color={product.color}/>
                            <ProductSize><b>Size:</b>{product.size}</ProductSize>
                        </Details>
                        <PriceDetails>
                        <ProductAmountContainer>
                            <Add/>
                            <ProductAmount>{product.quantity}</ProductAmount>
                            <Remove/>
                        </ProductAmountContainer>
                        <ProductPrice>&#8377; {product.price}/-</ProductPrice>
                    </PriceDetails>
                    </ProductDetails>
                 
                </Product>

                    
                ))}
                
                <Hr/>

              
            </Info>

            <Summary>
                <SummaryTitle>Order Summary</SummaryTitle>

                <SummaryItem>
                    <SummaryItemText>Sub Total</SummaryItemText>
                    <SummaryItemPrice>&#8377; {total}</SummaryItemPrice>
                </SummaryItem>

                <SummaryItem>
                    <SummaryItemText>Estimated Shipping</SummaryItemText>
                    <SummaryItemPrice>{0}</SummaryItemPrice>
                </SummaryItem>

                <SummaryItem>
                    <SummaryItemText>Shipping Discount</SummaryItemText>
                    <SummaryItemPrice>{0}</SummaryItemPrice>
                </SummaryItem>

                <SummaryItem type="total">
                    <SummaryItemText>Total</SummaryItemText>
                    <SummaryItemPrice>&#8377; {total}</SummaryItemPrice>
                </SummaryItem>
                <Button onClick={makePayment}>Check Out</Button>
            </Summary>
        </Bottom>
        </Wrapper>
        <Footer/>
      
    </Container>
  )
}

export default Cart
