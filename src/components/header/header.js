import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const HeaderBlock = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1 1 50px;
    flex-wrap: wrap;
  
`;

const HeaderTitle = styled.h3 `
    font-size: 34px;
    flex: 1 1 auto;
    margin: 0;
`;

const Uls = styled.ul `
    display: flex;
    margin: 0;
    align-items: center;
    list-style-type: none;
`;

const Lis = styled.li `
    font-size: 24px;
    padding: 0 15px 0 0;
`;


const Header = () => {
    return (
        <HeaderBlock>
            <HeaderTitle>
                <Link  to ='/' style = {{textDecoration: 'none', color: '#fff'}}> 
                    Game of Thrones DB
                </Link>
            </HeaderTitle>
            <Uls>
                <Lis>
                    <Link to ='/characters/' style = {{textDecoration: 'none', color: '#fff'}}>Characters</Link>
                </Lis>
                <Lis>
                    <Link to = '/houses/' style = {{textDecoration: 'none', color: '#fff'}}>Houses</Link>
                </Lis>
                <Lis>
                    <Link to ='/books/' style = {{textDecoration: 'none', color: '#fff'}}>Books</Link>   
                </Lis>
            </Uls>
        </HeaderBlock>
    );
};

export default Header;