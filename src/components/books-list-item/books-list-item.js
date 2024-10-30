import { Component } from 'react';
import './books-list-item.css';


class BookListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            descr: false
        }
    }
    showDescr = () => {
        // console.log(`this item's descr is open ${id}`)
        this.setState(({descr}) => ({
            descr: !descr
        }))
    }
    
    render() {
        const {title, author, available, lang, onDelete, onFavorite, favorite} = this.props;
        const {descr} = this.state;
        return (
            <li className="list-group-item">
                <div className='list-header' onClick={this.showDescr}>
                    <span className="list-group-item-label" lang={lang}>{title}</span>
                    <span className="list-group-item-label" lang={lang}>{author}</span>
                    <span className="list-group-item-label">{available ? "Dostupná" : ""}</span>
                    <div className='d-flex justify-content-center align-items-center'>
                        <button type="button"
                            className="btn-heart btn-sm "
                            onClick={onFavorite}>
                            <i className={favorite ? 'fa-solid fa-heart' : 'fa-regular fa-heart'}></i>
                        </button>
                        <button type="button"
                            className="btn-trash btn-sm "
                            onClick={onDelete}>
                            <i className="fas fa-trash"></i>
                        </button>
                        <button type="button"
                            className="btn-sm">
                            <i className="fa-solid fa-question"></i>
                        </button>
                    </div>
                </div>
                <div className={descr ? "list-body-descr" : 'list-body-descr hidden' } lang={lang}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim impedit doloremque nobis voluptas laborum, dicta sequi ex, perferendis deleniti, delectus magnam harum dignissimos. Omnis praesentium vel eligendi consequatur, deserunt debitis!
                    Laudantium, quod, dolore dicta soluta quaerat, recusandae ullam repellat voluptatum temporibus asperiores labore. Natus nam ipsum minus sed eius sint ad distinctio! Laboriosam amet optio cupiditate animi perferendis non dolorum!
                    Explicabo repudiandae in aut ullam quasi doloribus suscipit nulla magni. Nihil consequatur culpa dolorum sit minima, sint nemo autem eligendi facere aliquam sunt vel, ratione non possimus perspiciatis corporis reiciendis.
                </div>
            </li>
        )
    }
    // render() {
    //     // const {favorite, descr} = this.state;
    // }
    
}

export default BookListItem;