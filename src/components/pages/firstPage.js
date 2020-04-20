import React, {Component} from 'react';
import styled from 'styled-components'; 
import RandomChar from '../randomChar';

///////////////////////////////////////////// Styled components////////////////////////////////////////////////////////

const Content = styled.div `

    display: flex;
    flex-direction: column;
    height: 90vh;
    font-size: 24px;
    color: #fff;
    border: 2px solid #fff;
    background: url("https://fandomania.ru/userfiles/image/igra-prestolov.jpg")  100%/cover no-repeat;
    background-position: center center;
    @media (max-width: 768px) {
        
        margin:  0;
        padding: 0;
     
    }
    @media (max-width: 360px) {
        width: 100%;
        margin:  0;
        padding: 0;
     
    }
`; 
const Container = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center
    margin: 0 auto;
    flex: 0 0 50px;
   
`;
const Sdiv = styled.div `
    width: 100%;
    flex: 1 1 auto;
`;

const Button = styled.button `
    width: 100px;
    height: 25px;
    color: #fff;
    background-color: rgba(92, 45, 45, 0.4);
    margin:  20px;
  
`;


///////////////////////////////////////////// Styled components  ////////////////////////////////////////////////////////

export default class FirstPage extends Component {
   
    state= {
        
        toggleChr: false,
        visibleRandom: true,
        error: false
    }

    setVisibleRand = () => {   
        this.setState({
            visibleRandom: !this.state.visibleRandom,
            toggleChr: !this.state.toggleChr
        })
    }

   render(){
    const {visibleRandom, toggleChr} = this.state;
    const visibleRand = visibleRandom? <RandomChar interval ={5000}/> : null;
    const toggleCharacter = toggleChr? 'Open ': 'Close'; 
        return (
            
                <Content>
                   <Sdiv></Sdiv>
                    <Container> 
                        {visibleRand}
                        <Button onClick = {this.setVisibleRand}>{toggleCharacter} </Button>
                    </Container>
                </Content>
                
            
        )
   }
    
}
