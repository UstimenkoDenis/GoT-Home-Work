import React, {Component} from 'react';
import ItemList from '../../itemList';
import CharDetails, {Field} from '../../charDetails';
import styled from 'styled-components'
import ErrorMessage from '../../errorMessage/errorMessage';
import GotService from '../../../services/gotService';
import RowBlock from '../../rowBlock'

/// Наша отдельная страница Characters//////////

const Row = styled.div `
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 30px;
    @media (max-width: 768px) {
        margin: 5px;
        padding: 5px;
    }
`;

const Col = styled.div `
     width: 400px;
     flex: 0 1 33.33%;
    @media (max-width: 1100px) {
        flex: 0 1 50%;
    }
    @media (max-width: 768px) {
        flex: 0 1 100%;
        margin: 5px;
        padding: 5px;
    }
    
`;

export default class CharacterPage extends Component {
    gotService = new GotService();

    state = {
        selectedChar: null,
        error: false
    }
    
    onItemSelected = (id) => {
        this.setState({
            selectedChar: id
        })
    }

    componentDidCatch() {
        this.setState({
            error: true
        })
    }  

    render () {

        if(this.state.error){
            return <ErrorMessage/>
         }
        const itemList = (
            <ItemList
                onItemSelected = {this.onItemSelected}
                getData = {this.gotService.getAllCharacters}
                renderItem = {({name, gender}) => `${name} (${gender})`}/> 
        )

        const charDetails = (
            // То что мы напишем внутри CharDetails - строки Field - попадут в props.children компонента CharDetails
            <CharDetails charId={this.state.selectedChar}>
                
                <Field field = 'gender' label = 'Gender'/>   
                <Field field = 'born' label = 'Born'/>
                <Field field = 'died' label = 'Died'/>
                <Field field = 'culture' label = 'Culture'/>
            
            </CharDetails>
        )
       return (
            <RowBlock left = {itemList} right = {charDetails}/>
        )
           
    }
}
