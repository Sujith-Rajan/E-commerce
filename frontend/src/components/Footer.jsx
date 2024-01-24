import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
import PermPhoneMsgRoundedIcon from '@mui/icons-material/PermPhoneMsgRounded';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import styled from 'styled-components';
import {mobile} from '../responsive'

const Container = styled.div`
display:flex;
${mobile({flexDirection: "column"})}
`
const Left = styled.div`
flex: 1;
display: flex;
flex-direction: column;
padding: 20px;
`
const Logo = styled.h1`
`
const Desc = styled.p`
margin: 20px 0px;
`
const SocialContainer = styled.div`
display:flex;
`
const SocialIcon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
color: white;
background: #${(props) => props.color};
display: flex;
align-items: center;
justify-content: center;
margin-right: 20px;
`
const Center = styled.div`
flex: 1;
padding: 20px;

`
const Title = styled.h3`
margin-bottom: 30px;
`
const List = styled.ul`
margin: 0;
padding: 0;
list-style: none;
display: flex;
flex-wrap: wrap;
`
const ListItem = styled.li`
width: 50%;
margin-bottom: 10px;
`
const Right = styled.div`
flex: 1;
padding: 20px;
`
const ContactItem = styled.div`
margin-bottom: 20px;
display: flex;
align-items: center;
`
const Payment = styled.img`
width: 50%;
`


const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>ATTIRE.</Logo>
        <Desc>
        There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
        </Desc>
        <SocialContainer>
            <SocialIcon color={'3B5999'}>
                <FacebookRoundedIcon/>
            </SocialIcon>
            <SocialIcon color={'ee2a7b'} >
                <InstagramIcon/>
            </SocialIcon>
            <SocialIcon color={"55ACEE"}>
                <TwitterIcon/>
            </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
            <Title>Useful Links</Title>
            <List>
              <ListItem>Home</ListItem>
              <ListItem>Cart</ListItem>
              <ListItem>Man Fashion</ListItem>
              <ListItem>Woman Fashion</ListItem>
              <ListItem>Accessories</ListItem>
              <ListItem>My Account</ListItem>
              <ListItem>Order Tracking</ListItem>
              <ListItem>Wishlist</ListItem>
              <ListItem>Terms</ListItem>
         
            </List>
      </Center>
    <Right>
            <Title>Contact</Title>
            <ContactItem>
                <PermPhoneMsgRoundedIcon/>+91 9846522638
            </ContactItem>
            <ContactItem>
             <MailOutlineRoundedIcon/>sujithrajan223@gmail.com    
            </ContactItem>
            <ContactItem>
                <LocationOnIcon/>Ernakulam,682315
            </ContactItem>
            <Payment src='https://i.ibb.co/Qfvn4z6/payment.png'/>
    </Right>
    </Container>
  )
}

export default Footer
