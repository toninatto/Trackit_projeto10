import styled from "styled-components";
import { Link } from "react-router-dom"

export default function Footer () {

    return (
    <Container>
        <div className="menu">
            <Link to={"/habitos"}><h4>Hábitos</h4></Link>
            <Link to={"/historico"}><h4>Histórico</h4></Link>
        </div>
    <div className="circulo-hoje">
        <Link to={"/hoje"}><h3>Hoje</h3></Link>
    </div>
    </Container>
    )
}

const Container = styled.div`
.menu {
    width: 100%;
    height: 70px;
    background-color: #ffffff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-inline: 30px;
    box-sizing: border-box;
    
    position: fixed;
    bottom: 0;
    left: 0;
}
.circulo-hoje{
    width: 91px;
    height: 91px;
    border-radius: 47px;
    background-color: #52B6FF;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    position: fixed;
    bottom: 10px;
    left: 37.5%;
    text-decoration: none;
}
h4 {
    font-family: 'Lexend Deca';
    font-size: 18px;
    Color: #52B6FF;
    text-decoration: none;
}
h3 {
    font-family: 'Lexend Deca';
    font-size: 18px;
    Color: #ffffff;
    text-decoration: none;
}
`