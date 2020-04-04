import React, {Component} from 'react';
import './randomChar.css';


import styled from 'styled-components'; // ввели стилизованные компоненты


// export default class RandomChar extends Component {

//     render() {

//         return (
//             <div className="random-block rounded">
//                 <h4>Random Character: John</h4>
//                 <ul className="list-group list-group-flush">
//                     <li className="list-group-item d-flex justify-content-between">
//                         <span className="term">Gender </span>
//                         <span>male</span>
//                     </li>
//                     <li className="list-group-item d-flex justify-content-between">
//                         <span className="term">Born </span>
//                         <span>11.03.1039</span>
//                     </li>
//                     <li className="list-group-item d-flex justify-content-between">
//                         <span className="term">Died </span>
//                         <span>13.09.1089</span>
//                     </li>
//                     <li className="list-group-item d-flex justify-content-between">
//                         <span className="term">Culture </span>
//                         <span>Anarchy</span>
//                     </li>
//                 </ul>
//             </div>
//         );
//     }
// }


///////////////////////////////// Домашняя работа ///////////////////////////////////
////////////////////////// применяем styled components //////////////////////////////

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

export default class RandomChar extends Component {

    render() {

        return (
            <CharBlock>
                <CharHeader>Random Character: John</CharHeader>
                <CharList>
                    <CharacterData>
                        <CharDataName>Gender </CharDataName>
                        <span>male</span>
                    </CharacterData>
                    <CharacterData>
                        <CharDataName>Born </CharDataName>
                        <span>11.03.1039</span>
                    </CharacterData>
                    <CharacterData>
                        <CharDataName>Died </CharDataName>
                        <span>13.09.1089</span>
                    </CharacterData>
                    <CharacterData>
                        <CharDataName>Culture </CharDataName>
                        <span>Anarchy</span>
                    </CharacterData>
                </CharList>
            </CharBlock>
        );
    }
}
