

export default class GotService {
      constructor() {
            this._apiBase = 'https://www.anapioficeandfire.com/api';
            // нижнее подчеркивание говорит для разработчиков, что это какие то статичные данные и их не надо трогать вообще
      }
  
      getResource = async (url) => {
            const res = await fetch(`${this._apiBase}${url}`); // первая часть у нас всегда сформированна
      
            if(!res.ok) { // res.ok - хоть что то получили от сервера
                  throw new Error(`Could not fetch ${url}, status: ${res.status}`);
            }     //  - получим статус своей ошибки
              
            return await res.json();
      }; 
      
  
      getAllCharacters = async () => {  // нам необходимо дождаться результата с сервера
            const res =  await this.getResource(`/characters?page=5&pageSize=10`); 
              return res.map(this._transformCharacter); // трансформируем наш массив
      }
      // метод для получения одного персонажа по id 
      getCharacter = async (id) => {
            
            const character = await this.getResource(`/characters/${id}`); 
            console.log(character);
            return this._transformCharacter(character); 
      }
  
  
      getAllHouses = async () => {
            const res = await this.getResource('/houses/');
            return res.map(this._transformHouses)
      }
  
      getHouse = async(id) => {
            const house =  await this.getResource(`/houses/${id}/`);
            return this._transformHouses(house)
      }
  
      getAllBooks = async() => {
            const res =  await this.getResource('/books/');
            return res.map(this._transformBook);
      }
      getBook = async(id) => {
            const book = await this.getResource(`/books/${id}`);
            return this._transformBook(book);
      }

      isSet(data) {                 // проверка на пустые данные
            if(data) {
                  return data
            } else {
                  return 'no data :('
            }
      }

      _extractId = (item) => {
            const idRegExp = /\/([0-9]*)$/;
            return item.url.match(idRegExp)[1];
      }

      
      _transformCharacter = (char) => {
           
            return {
              id: this._extractId(char),   
              name: this.isSet(char.name),
              gender: this.isSet(char.gender),
              born: this.isSet(char.born),
              died: this.isSet(char.died),
              culture: this.isSet(char.culture)
      
            };
      }
      _transformHouses = (house) => {
            return {
                  id: this._extractId(house), 
                  name: this.isSet(house.name),
                  region: this.isSet(house.region),
                  words: this.isSet(house.words),
                  titles: this.isSet(house.titles),
                  overlord: this.isSet(house.overlord),
                  ancestralWeapons: this.isSet(house.ancestralWeapons)
            }
      }
  
      _transformBook = (book) => {
        return {
              name: this.isSet(book.name),
              numberOfPages: this.isSet(book.numberOfPages),
              publiser: this.isSet(book.publiser),
              relesead: this.isSet(book.released)
        }
      }
  }
  
  
  
