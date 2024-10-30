import { Component } from 'react';
import './book-add-form.css';
import { toBeInvalid } from '@testing-library/jest-dom/matchers';

class BookAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            author: "",
            lang: "",
            available: "true",
            favorite: false
        }
    }
    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.title < 3 || this.state.author < 3) return;
        this.props.onAdd({...this.state});
        this.setState({
            title: "",
            author: "",
            lang: "",
            available: "true"
        })  
    }
    render() {
        const {title, author} = this.state;
        return (
            <div className="app-add-form">
                <h3>Přidání nové knihy</h3>
                <form
                    className="add-form d-flex"
                    onSubmit={this.onSubmit}>
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Název knihy"
                        name='title'
                        value={title}
                        minLength={3}
                        onChange={this.onValueChange}
                        onInvalid={this.onInvalid}
                        required/>
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Autor knihy" 
                        name='author'
                        value={author}
                        minLength={3}
                        onChange={this.onValueChange}
                        onInvalid={this.onInvalid}
                        required/>
                    <select className="form-select form-select-sm" aria-label="Small select example" name='lang' required onChange={this.onValueChange}>
                        <option value="">Jazyk knihy</option>
                        <option value="cs">cs</option>
                        <option value="uk">ukr</option>
                        <option value="en">eng</option>
                    </select>
                    <select className="form-select form-select-sm" aria-label="Small select example" name='available' onChange={this.onValueChange}>
                        <option value='true'>dostupná</option>
                        <option value="">nedostupná</option>
                    </select>
                    <button type="submit"
                            className="btn btn-outline-light">Přidat</button>
                </form>
            </div>
        )
    }
}

export default BookAddForm;