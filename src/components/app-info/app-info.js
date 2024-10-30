
import './app-info.css';

const AppInfo = ({quantityBooks, actualReadingBooks}) => {
    return (
        <div className="app-info">
            <h1>Knihovna Kalyna</h1>
            <h2>Jste přihlášený jako: </h2>
            <h2>Celkový počet knih: {quantityBooks}</h2>
            <h2>Aktuálně čtené knihy: {actualReadingBooks} </h2>
        </div>
    )
}

export default AppInfo;