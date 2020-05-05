import React, {useState, useEffect} from 'react';
import GotService from '../../services/gotService'
import styled from 'styled-components'; // ввели стилизованные компоненты
import Spinner from '../spinner';
import ErrorMessage from '../errorMessage';
import PropTypes from 'prop-types'

//////////////////////////////////styled components//////////////////////////////////

const CharBlock = styled.div `

   
    width: 100%;
    color: #fff;
    font-size: 18px;
    padding: 5px 5px 5px 5px;
    margin: 5px;
    @media (max-width: 768px) {
        
        margin:  0;
        padding: 0;
        font-size: 12px;
    }

`;
const HeaderS = styled.h4 `
    margin-bottom: 5px;
    text-align: center;
`;
const Uls = styled.ul `
  
    display: flex;
    padding: 5px 25px 5px 5px;
    list-style-type: none;   
    margin-bottom: 10px;
    justify-content: center;
`;

const Lis = styled.li `
    display: flex;
    justify-content: space-around;
    cursor: pointer;
    color: #fff;
    padding: 5px 5px;
   
`;

const Spans = styled.span `
    padding: 0 30px 0 0;
    color: rgb(92, 45, 45);
    font-weight: bold;
`;
//////////////////////////////////styled components//////////////////////////////////

function RandomChar ({interval}) {
    
    let gotService = new GotService();

    const [char, setChar] = useState({});
    const [loading, setLoad] = useState(true);
    const [error, setError] = useState(false);
    
    useEffect(()=>{
        updateChar();
       let timerId = setInterval(updateChar, interval);

       return () => {clearInterval(timerId)} // при завершении
    },[]);
 
    function updateChar () {

        const id = Math.floor(Math.random()*140+50); 
            gotService.getCharacter(id)
                .then(onCharLoaded)
                .catch(onError)
    }
    
    function onCharLoaded(char) {
          setChar(char);
          setLoad(false);
          setError(false);
       
    } 

    function onError () { 
          setLoad(true);
          setError(false);
        
    }
    

    console.log('render');
   
    const errorMessage = error? <ErrorMessage/> : null
    const spinner = loading? <Spinner/> : null; 
    const content = !(loading||error)? <View char={char}/>: null; 
            
    return (
        <CharBlock>
            {errorMessage}
            {spinner}
            {content}
        </CharBlock>
    );
    
}


const View = ({char})=> { 
    const {name, gender, born, died, culture} = char;
    return (
        <>
            <HeaderS>{name}</HeaderS>
            <Uls>
                <Lis>
                    <Spans>Gender </Spans>
                        <span>{gender}</span>
                </Lis>
                <Lis>
                    <Spans>Born </Spans>
                        <span>{born}</span>
                </Lis>
                <Lis>
                    <Spans>Died </Spans>
                    <span>{died}</span>
                </Lis>
                <Lis>
                    <Spans>Culture </Spans>
                    <span>{culture}</span>
                </Lis>
            </Uls>
        </>
    )
}
export default RandomChar;