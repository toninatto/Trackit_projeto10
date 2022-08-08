import styled from "styled-components";
import Topo from "./topo";
import Footer from "./footer";

export default function Habitos () {

  
    
    return (
        <Container>
          <Topo/>

          <div className="add-meus-habitos">
            <p>Meus hábitos</p>
            <button className="add-habito"><h2> + </h2></button>
        </div>  
            
          <span className="no-habits">
            Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
          </span>
        
        <Footer />
        </Container>
    )
}

const Container = styled.div`
background-color: #f2f2f2;
    height: 667px;
    padding-top: 70px;
    padding-bottom: 70px;
  .title {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0;
  }
    p {
      font-family: 'Lexend Deca';
    font-size: 23px;
    color: #126BA5;   
    }
  
  .no-habits {
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
  }
`;

