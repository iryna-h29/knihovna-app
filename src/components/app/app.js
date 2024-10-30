import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import BooksList from '../books-list/books-list';
import BookAddForm from '../book-add-form/book-add-form';

import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    id: 1,
                    title: 'Музичний модернізм як terra cognita',
                    author: 'Олена Корчова',
                    available: true,
                    lang: 'uk',
                    favorite: false
                },
                {
                    id: 2,
                    title: 'Чеські історії 20 століття',
                    author: 'Радомир Мокрик',
                    available: true,
                    lang: 'uk',
                    favorite: false
                },
                {
                    id: 3,
                    title: 'Подолати минуле: глобальна історія України',
                    author: 'Ярослав Грицак',
                    available: false,
                    lang: 'uk',
                    favorite: false
                }
            ],
            term: "",
            filter: "all"
        }
        this.maxValue = this.state.data.length + 1;
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(obj => obj.id !== id)
            }
        })
    }

    addItem = (newObj) => {
        newObj.id = this.maxValue++;
        this.setState(({data}) => {
            const newData = [...data, newObj];
            return {
                data: newData
            }
        })
    }
    onFavorite = (e, id) => {
        e.stopPropagation();
        this.setState(({data}) => {
            const index = data.findIndex(item => item.id === id);
            const old = data[index];
            const newItem = {...old, favorite: !old.favorite};
            const newArr = data.toSpliced(index, 1, newItem);
            return {
                data: newArr
            }
        })
    }


    onUpdateSearch = (term) => {
        this.setState({term});
    }
    searchBook = (items, term) => {
        if (term.length === 0) {
            return items;
        }

        return items.filter(item => {
            return item.title.indexOf(term) > -1
        })
    }


    onUpdateFilter = (filter) => {
        this.setState({filter});
    }

    onFilterByProp = (items, prop) => {
        if (prop === "available" || prop === "favorite") {
            return items.filter(obj => obj[prop]);
        } else {
            return items
        }
    }


    render() {
        const {data, term, filter} = this.state;
        const booksQuantity = data.length;
        const actualReadingBooks = data.filter(bookObj => !bookObj.available).length;
        const visibleData = this.onFilterByProp(this.searchBook(data, term), filter);
        return (
            <div className="app">
                <AppInfo 
                    quantityBooks={booksQuantity}
                    actualReadingBooks={actualReadingBooks}/>
                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter filter={filter} onUpdateFilter={this.onUpdateFilter}/>
                </div>
                <BooksList 
                    data={visibleData}
                    onDelete={this.deleteItem}
                    onFavorite={this.onFavorite}/>
                <BookAddForm onAdd={this.addItem}/>
            </div>
        );
    }
}

export default App;