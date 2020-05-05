import React, {Component} from 'react';
import GotService from '../../services'
import ItemDetails, {Field} from '../itemDetails';
import styled from 'styled-components'; 

const Book = styled.div `

    padding: 20% 0 0 0;
    display: flex;
    justify-content: center;
   
`;

export default class BooksItem extends Component {
    gotService = new GotService();
    
    render() {
        return (
            <Book>
                <ItemDetails 
                        itemId={this.props.bookId}
                        getData = {this.gotService.getBook}>
                    
                    <Field field = 'numberOfPages' label = 'Number Of Pages'/>   
                    <Field field = 'publisher' label = 'Publisher'/>
                    <Field field = 'released' label = 'Released'/>
                        
                </ItemDetails>
            </Book>
        )
    }
}