
import Footer from "../Footer";
import SideMune from "../SideMenu";
import styled from "styled-components";

const Container = styled("div")`
    display: flex;
    min-height: 100vh;
    color: ${({theme}) => theme.color};
   background-color: ${({theme}) => theme.primary};
`


const ChildrenComponent = styled("div")`
    padding: 2rem ;
    width: 90vw;


`



const BaseLayout = ({children}) => {
    return(
        <Container >
             <SideMune />
             <ChildrenComponent>
             {children}
             </ChildrenComponent>
             
             <Footer />
        </Container>
    )
}

export default BaseLayout;