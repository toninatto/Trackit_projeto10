import { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';

export default function Login () {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();


    function logar () {
    
        const body = {
            email: email,
            password: password
        }
        
    
        const promise = axios.post(
            "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login",
            body);
            
        promise.then(res => {   
            console.log(res.data);
            //setToken(res.data.token); 
            
            //setImg(res.data.image);  
            navigate("/hoje");
        })}

    return (
        <>
        <Container>
        <img src="./img/Logo.png" alt=""/>
        <input type="text" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <input type="password" placeholder="senha" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button onClick={logar}><span> Entrar </span></button>    
        <Link to={"/cadastro"}><p>Não tem uma conta? Cadastre-se!</p></Link>         
        </Container>
        </>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 68px;

input {
    width: 303px;
    height: 45px;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    padding-left: 11px;
    box-sizing: border-box;
    margin-bottom: 6px;    
}

img{
    margin-bottom: 32px;
}

::placeholder{
    font-family: 'Lexend Deca';
    font-size: 20px;
    Color: #DBDBDB;    
}

button {
    background-color: #52B6FF;
    width: 303px;
    height: 45px;
    border: 1px solid #D5D5D5;
    border-radius: 5px;    
    box-sizing: border-box;
    margin-bottom: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
}
span {
    font-family: 'Lexend Deca';
    font-size: 21px;
    Color: #ffffff;
}
p {
    font-family: 'Lexend Deca';
    font-size: 14px;
    Color: #52B6FF;
    text-decoration: underline;
    margin-top: 25px;
}
`

