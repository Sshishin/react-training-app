import logo from './logo.svg';
import './App.css';



function App() {    //Всю структуру мы строим через этот компонент и дальше его просто рендерим в точке входа через index
    return (
        <div className="App">
            <Header />
            <Descr firstDigit={2} secondDigit={7} />
        </div>
    );
}

function Header() {
    return (
        <h1>Hello React!</h1>
    )
}

function Descr({ firstDigit, secondDigit }) {
    return (
        <p>Здесь мы считаем цифры 2 и 7 = {firstDigit + secondDigit}</p>
    )
}



export default App;
