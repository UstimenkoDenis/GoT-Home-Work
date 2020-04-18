import React, {Component} from 'react';
import ItemList from '../itemList';
import ErrorMessage from '../errorMessage/errorMessage';
import GotService from '../../services/gotService';
import {withRouter} from 'react-router-dom';


class BooksPage extends Component {

    gotService = new GotService();

    state = {
          error: false
    }
    
    componentDidCatch() {
        this.setState({
            error: true
        })
    }  

    render () {

        if(this.state.error){
            return <ErrorMessage/>
         }
      
       return (
            <ItemList
                onItemSelected = {(itemId)=> {
                    // this.props.history.push(`/books/${itemId}`) способ  с абсолютным путем
                    this.props.history.push(itemId) 
                }}
                getData = {this.gotService.getAllBooks}
                renderItem = {({name}) => `${name} `}/> 

        )
           
    }
}
export default withRouter(BooksPage);
// используем одно из API route -history - оно позволяет нам переходить на другие

// WithRouter - компонент высшего порядка может оборачивать другие компоненты чтобы предоставить им какие то свойства
// например booksPage я хочу чтобы получил те property которые есть у роутера

// Мы сделали так чтобы кликнув в списке на книгу мы открыли новую страницу с данными
// Мы реализовали динамические пути
// изменим еще

// когда мы находимся на странице книг - нам уже не нужно все время вводить /books/
// Нам необходимо сформировать относительные пути
// По законам WEB если мы указываем в пути просто /books - то по логике браузера мы хотим получить файл букс так как у меня
// нет закрывающего слэша . Но если добавить слэш то это будет папка /books/ и дальше я хочу получить какой то файл

// добавляем слэши в Headrer.js