import React, {Component} from 'react';

import styled from 'styled-components'

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

const RowBlock = ({left, right}) => {
    return (
        <>
            <Col>
                {left}
            </Col>
            <Col>
                {right}
            </Col>
        </>
    )
    
}
export default RowBlock;