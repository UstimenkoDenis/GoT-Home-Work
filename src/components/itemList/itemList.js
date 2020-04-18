import React, {Component} from 'react';
// import './itemList.css';
import styled from 'styled-components'; // ввели стилизованные компоненты
import Spinner from '../spinner';


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

export default class ItemList extends Component {
    
    state = {
        itemList: null
    }

    componentDidMount() {
        const {getData} = this.props; // 

        getData()
            .then((itemList) => {
                this.setState({
                    itemList
                })
            })
    }
     
    renderItems(arr) {
        return arr.map((item)=>{
            const {id} = item;
            const label = this.props.renderItem(item) 
            return (
                <Lis
                    key = {id}
                    onClick = {()=>this.props.onItemSelected(id)}>
                    {label}
                </Lis>
            )
            
        })
    }
    
    render() {
        const {itemList} = this.state  

        if(!itemList) {
            return <Spinner/>
        }
        const items = this.renderItems(itemList);

        return (
          
            <Uls>
                {items}
            </Uls>
        );
    }
}







