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

   max-widh: 1200px;
   padding: 15px;
  
`; 

const Row = styled.div `
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 30px;
`;

const Col = styled.div `
     width: 400px;
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