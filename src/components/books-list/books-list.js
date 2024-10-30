import BookListItem from "../books-list-item/books-list-item";

import './books-list.css';

const BooksList = ({data, onDelete, onFavorite}) => {
    
    const elements = data.map(item => {
        const {id, ...itemsProps} = item;
        return (
            <BookListItem 
            key={id} 
            {...itemsProps}
            onDelete={() => onDelete(id)}
            onFavorite={(e) => onFavorite(e, id)}/>
        )
    })
    return (
        <ul className="app-list list-group accordion">
           {elements}
        </ul>
    )
}

export default BooksList;