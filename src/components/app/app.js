import React, {Component} from 'react';
import './app.css';
import Header from '../header';
import ItemList from '../itemList';
import ItemDetails from '../itemDetails';
import styled from 'styled-components'; 
import GotService from '../../services'
import ErrorMessage from '../errorMessage'
import {CharacterPage, BooksPage, HousesPage, BooksItem, FirstPage, DoesNotExist}  from '../pages';
import {BrowserRouter as Router, Route} from 'react-router-dom';

///////////////////////////////////// styled components //////////////////////////////

const Wrapper = styled.div `

   
   display: flex;
   flex-direction: column;
   color: #fff;
   padding: 15px;
   
`; 

const Container = styled.div `
    
    flex: 1 1 auto;

`;  

///////////////////////////////////// styled components //////////////////////////////

export default class App extends Component {

    gotService = new GotService();

        state = {
           error: false
        };
              
    componentDidCatch() {
        console.log('error')
        this.setState({
            error: true
        })
    }    
    
    render() {
        if(this.state.error){
           return <ErrorMessage/>
        }
        const {visibleMenu} = this.state;
        
        return (
            <Router>
                <Wrapper> 
                    <Header/>
                    <Container>
                            <Route path = '/' exact component = {FirstPage}/>
                            <Route path = '/characters' component = {CharacterPage}/>
                            <Route path = '/houses' component = {HousesPage}/>
                            <Route path = '/books' exact component = {BooksPage}/>
                            <Route path ='/books/:id' render = {
                                ({match}) => {
                                    const {id} = match.params;
                                    if (id >= 11) {return <DoesNotExist/>} else
                                return  <BooksItem bookId = {id}/>}
                            }/>
                    </Container>
                </Wrapper>
            </Router>
            
        );
    }
    
};
