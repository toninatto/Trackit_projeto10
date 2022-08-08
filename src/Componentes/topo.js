import styled from "styled-components";


export default function Topo ({img}) {

    return (
        <Container>
            <h1>TrackIt</h1>
            <img src={img} alt="Perfil"/>
        </Container>
    )
}

const Container = styled.div`

    background-color: #126BA5;
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-inline: 18px;
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;

    h1{
    color: #ffffff;
    font-size: 39px;
    }
    img {
    width: 51px;
    height: 51px;
    border-radius: 25px;
    }
`