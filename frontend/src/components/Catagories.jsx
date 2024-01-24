import {catogories} from '../data'
import styled from 'styled-components'
import CatagoryItem from './CatagoryItem'
import {mobile} from "../responsive"

const Container = styled.div`
display:flex;
padding:20px;
justify-content: space-between;
${mobile({ padding: "0px", flexDirection:"column" })}
`


const Catagories = () => {
  return (
    <Container>
      {
        catogories.map((item) =>(
            <CatagoryItem item={item} key={item.id}/>
        ))
      }
    </Container>
  )
}

export default Catagories
