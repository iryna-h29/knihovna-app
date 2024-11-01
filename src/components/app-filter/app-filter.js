import { Component } from 'react';
import './app-filter.css';

class AppFilter extends Component {
    constructor(props) { // {filter, onUpdateFilter, onUpdateLang}
        super(props);
        this.state = {
            languages: [
                {lang: 'cs', on: true, label: 'CS'},
                {lang: 'uk', on: true, label: 'UA'},
                {lang: 'en', on: true, label: 'EN'},
            ]        
        }
        this.buttonsData = [
            {name: 'all', label: "Všechny knihy"},
            {name: 'available', label: "Dostupné k vypůjčení"},
            {name: 'favorite', label: "Oblíbené knihy"},
        ]; 
    }

    toggleCheckedStatus = (e) => {
        const currentLang = e.currentTarget.value;
        const newLangs = this.state.languages.map(({lang, on, label}) => {
            if (currentLang === lang) {
                return new Object({'lang': lang, 'on': !on, 'label': label})
            } else {
                return new Object({lang, on, label})
            }
        });
        this.setState({
            languages: newLangs
        });
        this.props.onUpdateLang(newLangs.filter((obj) => obj.on).map((obj) => obj.lang));
    }

    render() {
        const buttons = this.buttonsData.map(({name, label}) => {
            const active = this.props.filter === name;
            const clazz = active ? "btn-light" : "btn-outline-light";
            return (
                <button 
                    className={`btn ${clazz}`}
                    type='button'
                    key={name}
                    onClick={() => this.props.onUpdateFilter(name)}>
                    {label}
                 </button>
            )
        })
        const langOptions = this.state.languages.map(({lang, on, label}) => {
            return (
                <div className="form-check form-switch" key={lang}>
                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" name='language' value={lang} onChange={this.toggleCheckedStatus} checked={on}/>
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{label}</label>
                </div>
            )
        })
        return (
            <div className="btn-group">
                {buttons}
                <fieldset className="lang-fieldset">
                    <legend>jazyk:</legend>
                    {langOptions}
                </fieldset>
            </div>
        );
    }
}

export default AppFilter;