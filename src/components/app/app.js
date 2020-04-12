import React, {Component} from 'react';
// import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
import styled from 'styled-components'; // ввели стилизованные компоненты
import GotService from '../../services'
import ErrorMessage from '../errorMessage'
import CharacterPage from '../pages/characterPage/characterPage';


///////////////////////////////////// styled components //////////////////////////////

const Container = styled.div `

   max-widh: 1100px;
   padding: 15px;
   margin: 0 auto;

`; 

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

const Block = styled.div `
    height: 400px;
`;

const Button = styled.button `
    width: 200px;
    height: 30px;
    background-color: blue;
    
`;
///////////////////////////////////// styled components //////////////////////////////

export default class App extends Component {
    gotService = new GotService();

        state = {
            toggleChr: false,

            visibleRandom: true,
            error: false
        };
              
    componentDidCatch() {
        console.log('error')
        this.setState({
            error: true
        })
    }    
    
    setVisibleRand = () => {   
        this.setState({
            visibleRandom: !this.state.visibleRandom,
            toggleChr: !this.state.toggleChr
        })
    }
    
    render() {
        if(this.state.error){
           return <ErrorMessage/>
        }


        const {visibleRandom, toggleChr} = this.state;
        const visibleRand = visibleRandom? <RandomChar/> : null;
        const toggleCharacter = toggleChr? 'Показать ': 'Скрыть'; // rename label on button

        return (
            <> 
                <Container>
                    <Header />
                </Container>
                <Container>
                    <Row>
                        <Block></Block>
                    </Row>
                    <Row>
                        <Col>
                            {visibleRand}
                            <Button onClick = {this.setVisibleRand}> Нажмите чтобы {toggleCharacter} </Button>
                        </Col>
                        <CharacterPage/> 
                    </Row>

                    <Row>
                        <Col>
                            <ItemList
                                onItemSelected = {this.onItemSelected}
                                getData = {this.gotService.getAllBooks}
                                // renderItem = {(item) => (<><span>{item.name}</span><button>Click me</button></>)}/> 
                                renderItem = {(item) => item.name}/> 

                        </Col>
                        <Col>
                            <CharDetails
                                charId={this.state.selectedChar}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <ItemList
                                onItemSelected = {this.onItemSelected}
                                getData = {this.gotService.getAllHouses}
                                renderItem = {({name}) =>name} /> 
                                
                        </Col>
                        <Col>
                            <CharDetails
                                charId={this.state.selectedChar}/>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
    
};
