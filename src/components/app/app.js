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
   max-width: 100%;
   display: flex;
   flex-direction: column;
   color: #fff;
   padding: 15px;
   
`; 

const Container = styled.div `
    max-width: 100%;
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

// Зайдем в housesPage и удалим строку
// onItemSelected = {this.onItemSelected} // тогда при вызове домов будет происходить ошибка
// тогда у нас в ItemList в props он не придет и при onClick - функция не срабатывает тк она будет undefined 
// реакт предлагает решение defaultProps
// можем установить пропсы по умолчанию

// ItemList.defaultProps = {
//     onItemSelected: () => {}  // установим значение чистую функцию
// } // теперь ошибки нет

// Попрактикуемся с компонентом randomChar

// внем мы видим запуск компонента каждые 15 сек
//       this.timerId = setInterval(this.updateChar, 15000);
// заменим колво секунд на переменную из пропс this.props.interval
// как работает setInterval - если вдруг вместо второго аргумента пришло не число , то этот аргумент будет проигнорирован
// и функция setInterval поставит интервал обнавления в 10 милисек

// поместим наш defaultProps сразу после state чтобы другие программисты сразу видели какие есть дефолты
//
// JS - язык с динамической типизацией - это значит что типы данных могут меняться например interval - если поменяется его тип
// то функция setInterval будет вести себя по другому - выводить каждые 10 милисек

// Мы сами нативным способом можем проверять на тип данных В реакте есть свойство PropTypes при помощи него мы можем проверять
// на тип данных у каждого компонента

// в файле firstPage передадим компоненту RandomChar неверный пропс interval = false
// в файле randomChar напишем проверку на ошибку

// RandomChar.propTypes = {

//     interval: (props, propName, componentName) => {  // функция которая будет делать нашу проверку
//         const value = props[propName];
//         if(typeof value === 'number' && !isNaN(value)){
//             return null  //если все хорошо
//         }
//         // если проверку не прошла
//         return TypeError(`${componentName}: ${propName} must to be a number!`); // выкинем красивую ошибку чтобы любой разработчик понял в чем дело
//     }
// }

// Тогда в консоле выведет ошибку Warning ... и тд
// Такие проверки писать в ручную писать не обязательно так как есть много готовых решений для реакта есть библиотека PropTypes


// npm install prop-types

// Работа с этой библиотекой:


// импортируем ее

// import PropTypes from 'prop-types'

// пропишем в RandomChar

// RandomChar.propTypes = {
//     interval: PropTypes.number  // эта проверка будет срабатывать точно так же
// }

// Напишем такую провеку в ItemList
