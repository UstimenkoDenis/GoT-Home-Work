import React, {Component} from 'react';
import styled from 'styled-components'; 
import {Link} from 'react-router-dom';

//////////////////////////////// styled components ////////////////////////////////////

const Block = styled.div `

    max-width: 70%;
    height: 500px;
    border: 1px solid #bbacac;
    border-radius: 5px;
    color: #000;
    padding: 25px 25px 15px 25px;
    margin: 20px auto;
    background: url("https://opt-918408.ssl.1c-bitrix-cdn.ru/upload/iblock/610/3010_igraprestol.jpg?157241166288539")  100%/cover no-repeat;
    color: red;
    font-size: 45px; 
`;


//////////////////////////////// styled components ////////////////////////////////////
 
export default class DoesNotExist extends Component {
 render(){
     return (
    <Block>
        <p>Вы зашли не туда</p>
       <Link to = '/'> <button>Вернуться на главную страницу</button></Link>
    </Block>
     )
 }
}