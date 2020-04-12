import React, {Component} from 'react';
import './charDetails.css';
import styled from 'styled-components'; // ввели стилизованные компоненты
import GotService from '../../services';
import Spinner from '../spinner';
import ErrorMessage from '../errorMessage';

//////////////////////////////// styled components ////////////////////////////////////

const Block = styled.div `
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
const HeaderS = styled.h4 `
    margin-bottom: 20px;
    text-align: center;
`;
const Uls = styled.ul `
    display: flex;
    flex-direction: column;
    padding: 25px 25px 25px 25px;
    list-style-type: none;   
    margin-bottom: 40px;
`;

const Lis = styled.li `
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    color: #fff;
    font-size: 1rem;
    padding: 12px 20px;
    border-bottom: 1px solid #bbacac;
`;

const Spans = styled.span `
    font-weight: bold;
`;
//////////////////////////////// styled components ////////////////////////////////////


 const Field = ({char, field, label}) => {
    return (
    
        <Lis>
            <Spans>{label}</Spans>
            <span>{char[field]}</span> 
        </Lis>
        
    )
 }
 export {
     Field
 }
export default class CharDetails extends Component {
    
    gotService = new GotService();

    state = {
        char: null,
        loading: true,
        error: false
    }

    componentDidMount() {
        this.updateChar();
    }

    componentDidUpdate(prevProps) {  
       if(this.props.charId !==prevProps.charId) {
            this.updateChar();
        } 
    }                           

    updateChar() {                              
        const {charId} = this.props;
        if(!charId) {
            return;
        }
        
        this.gotService.getCharacter(charId)  
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
            loading: false,
            error: true
       })
    }

    render() {
        if(!this.state.char){
            return <span className = "select-error">Please select a character</span>
        }
        const {char} = this.state;
        const {name} = char; 

        return (
            <Block>
                <HeaderS>{name}</HeaderS>
                <Uls>
                   {
                       React.Children.map(this.props.children,(child)=>{
                            return React.cloneElement(child,{char})
                       })
                      
                   }
                    
                </Uls>
            </Block>
        );
    }
} 
//              React.Children.map(this.props.children,(child)=>{
//                              return React.cloneElement(child,{char})
//              })                 
//                                              - здесь мы перебираем наш props.children и из каждого элемента делаем новый
//                                                элемент к примеру  прибавим к <Field field = 'gender' label = 'Gender'/>
//                                                еще одно свойство  -  char. 
//