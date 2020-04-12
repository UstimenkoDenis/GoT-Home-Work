import React, {Component} from 'react';
import './randomChar.css';

import GotService from '../../services/gotService'
import styled from 'styled-components'; // ввели стилизованные компоненты
import Spinner from '../spinner';
import ErrorMessage from '../errorMessage';

//////////////////////////////////styled components//////////////////////////////////
const CharBlock = styled.div `
    border: 1px solid #bbacac;
    border-radius: 5px;
    color: #fff;
    padding: 25px 25px 15px 25px;
    margin: 20px;
    @media (max-width: 768px) {
        
        margin:  0;
        padding: 0;
    }

`;
const CharHeader = styled.h4 `
    margin-bottom: 20px;
    text-align: center;
`;
const CharList = styled.ul `
    display: flex;
    flex-direction: column;
    padding: 25px 25px 25px 25px;
    list-style-type: none;   
    margin-bottom: 40px;
`;

const CharacterData = styled.li `
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    color: #fff;
    font-size: 1rem;
    padding: 12px 20px;
    border-bottom: 1px solid #bbacac;
`;

const CharDataName = styled.span `
    font-weight: bold;
`;
//////////////////////////////////styled components//////////////////////////////////

export default class RandomChar extends Component {
    
        gotService = new GotService();

        state = {
           char: {}, 
           loading: true,
           error: false 
        }
        
    componentDidMount() {
        
       this.updateChar();
       this.timerId = setInterval(this.updateChar, 1500);
      
        console.log('mounting');

    }

    componentWillUnmount() {
        clearInterval(this.timerId);
        console.log('unmounting');
    }

    updateChar = () => {

        const id = Math.floor(Math.random()*140+50); 
         this.gotService.getCharacter(id)
                .then(this.onCharLoaded)
                .catch(this.onError)
    }
    
    onCharLoaded = (char) => {
        this.setState({
            char,
            loading: false,
            error: false
        })
    } 

    onError = () => { 
        this.setState({
            error: true,
            loading: false
        })
    }
    
    render() {
        console.log('render');
        const {char, loading, error } = this.state;
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
}

const View = ({char})=> { 
    const {name, gender, born, died, culture} = char;
    return (
        <>
            <CharHeader>Random Character: {name}</CharHeader>
            <CharList>
                <CharacterData>
                    <CharDataName>Gender </CharDataName>
                        <span>{gender}</span>
                </CharacterData>
                <CharacterData>
                    <CharDataName>Born </CharDataName>
                        <span>{born}</span>
                </CharacterData>
                <CharacterData>
                    <CharDataName>Died </CharDataName>
                    <span>{died}</span>
                </CharacterData>
                <CharacterData>
                    <CharDataName>Culture </CharDataName>
                    <span>{culture}</span>
                </CharacterData>
            </CharList>
        </>
    )
}