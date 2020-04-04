import React, {Component} from 'react';
// import './itemList.css';
import styled from 'styled-components'; // ввели стилизованные компоненты


// export default class ItemList extends Component {

//     render() {
//         return (
//             <ul className="item-list list-group">
//                 <li className="list-group-item">
//                     John Snow
//                 </li>
//                 <li className="list-group-item">
//                     Brandon Stark
//                 </li>
//                 <li className="list-group-item">
//                     Geremy
//                 </li>
//             </ul>
//         );
//     }
// }

/////////////////////////////// Домашняя работа ..//////////////////////////

const CharacterList = styled.ul `
    display: flex;
    flex-direction: column;
    padding: 25px 25px 25px 25px;
    list-style-type: none;   
    border: 1px solid #bbacac;
    border-radius: 5px;
    margin: 20px;
    @media (max-width: 768px) {
        
        margin:  0;
        padding: 0;
    }

`; // list-style-type: none - убираем кружки у списка

const Character = styled.li `
    cursor: pointer;
    color: #fff;
    font-weigth: bold;
    font-size: 1rem;
    padding: 12px 20px;
    border-bottom: 1px solid #bbacac;
`;


export default class ItemList extends Component {

    render() {
        return (
            <CharacterList>
                <Character>
                    John Snow
                </Character>
                <Character>
                    Brandon Stark
                </Character>
                <Character>
                    Geremy
                </Character>
            </CharacterList>
        );
    }
}