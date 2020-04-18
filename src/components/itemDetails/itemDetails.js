import React, {Component} from 'react';
import styled from 'styled-components'; // ввели стилизованные компоненты
import GotService from '../../services';
import Spinner from '../spinner';
import ErrorMessage from '../errorMessage';

//////////////////////////////// styled components ////////////////////////////////////

const Block = styled.div `
    width: 700px;
    border: 1px solid #bbacac;
    border-radius: 5px;
    color: #fff;
    padding: 25px 25px 15px 25px;
  
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
    font-size: 1rem;
    padding: 12px 20px;
    border-bottom: 1px solid #bbacac;
`;

const Spans = styled.span `
    font-weight: bold;
`;
//////////////////////////////// styled components ////////////////////////////////////


 const Field = ({item, field, label}) => {
    return (
    
        <Lis>
            <Spans>{label}</Spans>
            <span>{item[field]}</span> 
        </Lis>
        
    )
 }
 export {
     Field
 }
export default class ItemDetails extends Component {
    
    gotService = new GotService();

    state = {
        item: null,
        loading: true,
        error: false
    }

    componentDidMount() {
        this.updateItem();
    }

    componentDidUpdate(prevProps) {  
       if(this.props.itemId !==prevProps.itemId) {
            this.updateItem();
        } 
    }                           

    updateItem() {                              
        const {itemId} = this.props;
        if(!itemId) {
            return;
        }
        
        const {getData} = this.props;
        
        getData(itemId) 
            .then(this.onItemLoaded)   
            .catch(this.onError)
    }
    
    onItemLoaded = (item) => {
       this.setState({
            item,
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
        if(!this.state.item){
            return <span className = "select-error">Please select a item</span>
        }
        const {item} = this.state;
        const {name} = item; 

        return (
            <Block>
                <HeaderS>{name}</HeaderS>
                <Uls>
                   {
                       React.Children.map(this.props.children,(child)=>{
                           
                            return React.cloneElement(child,{item})
                       })
                      
                   }
                    
                </Uls>
            </Block>
        );
    }
} 
//              React.Children.map(this.props.children,(child)=>{
//                              return React.cloneElement(child,{item})
//              })                 
//                                              - здесь мы перебираем наш props.children и из каждого элемента делаем новый
//                                                элемент к примеру  прибавим к <Field field = 'gender' label = 'Gender'/>
//                                                еще одно свойство  -  item. 
//