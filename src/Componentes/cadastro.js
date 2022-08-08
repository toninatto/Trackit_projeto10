import { Link, useNavigate } from 'react-router-dom';
import {useState} from 'react';
import axios from 'axios';
import styled from 'styled-components';

export default function Cadastro () {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [image, setImage] = useState('');
    const navigate = useNavigate();

    function criarCadastro () {
        const body = {
            email: email,
	        name: name,
	        image: image,
	        password: password
        }
        
         const promise = axios.post(
             "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up",
             body)
        
         promise.then(res => {
             
             navigate("/");
         })
    }

    return (
        <>
        <Container>
        <img src="./img/Logo.png" alt=""/>        
        <input type="text" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="senha" value={password} onChange={(e) => setPassword(e.target.value)}/>
        <input type="text" placeholder="nome" value={name} onChange={(e) => setName(e.target.value)}/>
        <input type="text" placeholder="foto" value={image} onChange={(e) => setImage(e.target.value)}/>
        <button onClick={criarCadastro}><span> Cadastrar </span></button>
        <Link to={"/"}><p>Já tem uma conta? Faça o login!</p></Link>
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