import './App.css';



function App() {    //Всю структуру мы строим через этот компонент и дальше его просто рендерим в точке входа через index
    return (
        <div className="App">
            <Header check={false}/>
            <Descr firstDigit={2} secondDigit={7} />
        </div>
    );
}

function Header(props) {
    if(props.check) {
       return <h1>Hello React!</h1>
    } else {
       return <h1>Goodbye React!</h1>
    }
}

function Descr({ firstDigit, secondDigit }) {
    return (
        <p>Здесь мы считаем цифры 2 и 7 = {firstDigit + secondDigit}</p>
    )
}



export default App;
