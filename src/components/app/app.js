import React from 'react';
// import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';

import styled from 'styled-components'; // ввели стилизованные компоненты


// const App = () => {
//     return (
//         <> 
//             <Container>
//                 <Header />
//             </Container>
//             <Container>
//                 <Row>
//                     <Col lg={{size: 5, offset: 0}}>
//                         <RandomChar/>
//                     </Col>
//                 </Row>
//                 <Row>
//                     <Col md='6'>
//                         <ItemList />
//                     </Col>
//                     <Col md='6'>
//                         <CharDetails />
//                     </Col>
//                 </Row>
//             </Container>
//         </>
//     );
// };

// export default App;



////////////////////////////// Домашнее задание /////////////////////////////////

///////// делаем при помощи styled components

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


const App = () => {
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
                        <RandomChar/>
                    </Col>
                    <Col>
                        <ItemList />
                    </Col>
                    <Col>
                        <CharDetails />
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default App;