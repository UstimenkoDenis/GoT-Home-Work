import React, {useState, useEffect} from 'react';
// import './itemList.css';
import styled from 'styled-components'; // ввели стилизованные компоненты
import Spinner from '../spinner';
import PropTypes from 'prop-types'


const Uls = styled.ul `
    max-width: 500px;
    display: flex;
    color: #fff;
    flex-direction: column;
    padding: 25px 25px 25px 25px;
    list-style-type: none;   
    border: 1px solid #bbacac;
    border-radius: 5px;
    margin: 20px;
    @media (max-width: 768px) {
        
        margin:  0;
        padding: 0;
    }

`; 

const Lis = styled.li `
    cursor: pointer;
    font-weigth: bold;
    font-size: 1rem;
    padding: 12px 20px;
    border-bottom: 1px solid #bbacac;
`;

function ItemList({getData, onItemSelected, renderItem}) {
    
    const [itemList, updateList] = useState([]);
  
    useEffect(()=>{
        getData()
            .then((data) => {
                updateList(data);
            })
    }, []);    
      
    function renderItems(arr) {
        return arr.map((item)=>{
            const {id} = item;
            const label = renderItem(item) 
            return (
                <Lis
                    key = {id}
                    onClick = {()=>onItemSelected(id)}>
                    {label}
                </Lis>
            )
            
        })
    }
    
   
    if(!itemList) {
        return <Spinner/>
    }
    const items = renderItems(itemList); 

    return (
        
        <Uls>
            {items}
        </Uls>
    );
    
} 

export default ItemList;
