import logo from './logo.svg';
import './App.css';

const descr = (
<div>
    <p>Тут мы считаем числа 3 и 2 и получается = {3+2}</p>
</div>
);

function App() {
  return (
    <div className="App">
        <h1>Hello React!</h1>
        {descr}
    </div>
  );
}

export default App;
