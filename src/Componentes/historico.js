import styled from "styled-components";
import Topo from "./topo";
import Footer from "./footer";

export default function Historico () {

    return (
        <Container>            
        <Topo />
        <div className="add-meus-habitos">
            <p>Histórico</p>            
        </div>
        <div className="sem-habitos">
            <span>Em breve você poderá ver o histórico dos seus hábitos aqui!</span>
        </div> 
        <Footer />        
        </Container>
    )
}

const Container = styled.div`
    background-color: #f2f2f2;
    height: 667px;
    padding-top: 70px;
    padding-bottom: 70px;

    .sem-habitos {    
        word-wrap: break-word;
        margin-inline: 18px;
    }
    span{
        font-family: 'Lexend Deca';
        font-size: 18px;
        Color: #666666;
    }
    p {
    font-family: 'Lexend Deca';
    font-size: 23px;
    color: #126BA5;    
    }

`