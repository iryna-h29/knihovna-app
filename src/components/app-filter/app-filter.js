import './app-filter.css';

const AppFilter = ({filter, onUpdateFilter}) => {
    const buttonsData = [
        {name: 'all', label: "Všechny knihy"},
        {name: 'available', label: "Dostupné k vypůjčení"},
        {name: 'favorite', label: "Oblíbené knihy"},
    ]; 

    const buttons = buttonsData.map(({name, label}) => {
        const active = filter === name;
        const clazz = active ? "btn-light" : "btn-outline-light";
        return (
            <button 
                className={`btn ${clazz}`}
                type='button'
                key={name}
                onClick={() => onUpdateFilter(name)}>
                {label}
             </button>
        )
    })

    return (
        <div className="btn-group">
            {buttons}
            <fieldset className="lang-fieldset">
                <legend>jazyk:</legend>
                <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">cs</label>
                </div>
                <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">ua</label>
                </div>
                <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">en</label>
                </div>
            </fieldset>
        </div>
    );
}

export default AppFilter;