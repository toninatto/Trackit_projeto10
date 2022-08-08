import styled from "styled-components";
import Footer from "./footer";
import Topo from "./topo";


export default function Hoje() {
    
  
    return (
      <Container>        
          <Topo />
          <h2>Hoje</h2>
          <Footer />       
      </Container>
    );
  }
  
  const Container = styled.div`
    background-color: #f2f2f2;
    height: 667px;
    padding-top: 70px;
    padding-bottom: 70px;
    
      h2 {
        font-weight: 400;
        font-size: 23px;
        line-height: 29px;
        color: darkblue;
      }
     
  `;