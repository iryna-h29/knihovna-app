import { Component } from 'react';
// import './book-add-form.css';
import './book-add-form.scss';
import { toBeInvalid } from '@testing-library/jest-dom/matchers';
import {Form} from 'react-bootstrap';

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
        this.languagesData = [
            {code: 'cs', label: 'čeština'},
            {code: 'uk', label: 'українська'},
            {code: 'en', label: 'english'},
        ]
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
        const {title, author, lang} = this.state;
        const langOptions = this.languagesData.map(({code, label}) => {
            return (
                <option value={code} lang={lang} key={code}>
                    {label}
                </option>
            )
        })
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
                    <Form.Select as='select' size="sm" aria-label="Zvolit jazyk knihy" name='lang' value={lang} required onChange={this.onValueChange}>
                        <option value="">Jazyk knihy</option>
                        {langOptions}
                    </Form.Select>
                    <Form.Select as='select' size="sm" aria-label="Zvolit dostupnost knihy" name='available' onChange={this.onValueChange}>
                        <option value='true'>dostupná</option>
                        <option value="">nedostupná</option>
                    </Form.Select>
                    <button type="submit"
                            className="btn btn-outline-light">Přidat</button>
                </form>
            </div>
        )
    }
}

export default BookAddForm;