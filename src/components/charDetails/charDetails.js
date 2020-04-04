import React, {Component} from 'react';
import './charDetails.css';

import styled from 'styled-components'; // ввели стилизованные компоненты




// export default class CharDetails extends Component {

//     render() {
//         return (
//             <div className="char-details rounded">
//                 <h4>John Snow</h4>
//                 <ul className="list-group list-group-flush">
//                     <li className="list-group-item d-flex justify-content-between">
//                         <span className="term">Gender</span>
//                         <span>male</span>
//                     </li>
//                     <li className="list-group-item d-flex justify-content-between">
//                         <span className="term">Born</span>
//                         <span>1783</span>
//                     </li>
//                     <li className="list-group-item d-flex justify-content-between">
//                         <span className="term">Died</span>
//                         <span>1820</span>
//                     </li>
//                     <li className="list-group-item d-flex justify-content-between">
//                         <span className="term">Culture</span>
//                         <span>First</span>
//                     </li>
//                 </ul>
//             </div>
//         );
//     }
// }


/////////////////////////////////// Домашняя работа //////////////////////////////////
//////////////////////////////// styled components ////////////////////////////////////


const CharBlock = styled.div `
    border: 1px solid #bbacac;
    border-radius: 5px;
    color: #fff;
    padding: 25px 25px 15px 25px;
    margin-bottom: 40px;
`;
const CharHeader = styled.h4 `
    margin-bottom: 20px;
    text-align: center;
`;
const CharList = styled.ul `
    display: flex;
    flex-direction: column;
    padding: 25px 25px 25px 25px;
    list-style-type: none;   
    margin-bottom: 40px;
`;

const CharacterData = styled.li `
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    color: #fff;
    font-size: 1rem;
    padding: 12px 20px;
    border-bottom: 1px solid #bbacac;
`;

const CharDataName = styled.span `
    font-weight: bold;
`;


export default class CharDetails extends Component {

    render() {
        return (
            <CharBlock>
                <CharHeader>John Snow</CharHeader>
                <CharList>
                    <CharacterData>
                        <CharDataName>Gender </CharDataName>
                        <span>male</span>
                    </CharacterData>
                    <CharacterData>
                        <CharDataName>Born </CharDataName>
                        <span>1783</span>
                    </CharacterData>
                    <CharacterData>
                        <CharDataName>Died </CharDataName>
                        <span>1820</span>
                    </CharacterData>
                    <CharacterData>
                        <CharDataName>Culture</CharDataName>
                        <span>First</span>
                    </CharacterData>
                </CharList>
             </CharBlock>
        );
    }
}