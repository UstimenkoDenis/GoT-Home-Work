import React, {useState, useEffect} from 'react';
import styled from 'styled-components'; // ввели стилизованные компоненты
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


let itemIdLast;
function ItemDetails({itemId, getData, children}) {
   
 const [item, setItem] = useState([]);
 const [loading, setLoad] = useState(true);
 const [error, setError] = useState(false);

    useEffect(()=>{
        
        if(itemId !==itemIdLast) {
          
            if(!itemId){
                return;
            }

            getData(itemId) 
                .then((data)=>{
                    setItem(data);
                    setLoad(false);
                    setError(false);
                })   
                .catch(onError)
            return () => { itemIdLast = itemId;}
        } 
    })
   
   
    function onError() {
        console.log('error load')
        setLoad(false);
        setError(true);
    }

    if(!itemId){
        return <span className = "select-error">Please select a item</span>
    }
   
   const {name} = item; 
   const spinner = loading? <Spinner/>: null;
   const errorMessage = error? <ErrorMessage/>: null;
    return (
        <Block>
            <HeaderS>{name}</HeaderS>
            <Uls>
                {error}
                {spinner}
                {
                    React.Children.map(children,(child)=>{
                       return React.cloneElement(child,{item})
                    })
                  
                }
            </Uls>
        </Block>
    );
} 
export default ItemDetails;