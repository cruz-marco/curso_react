import './App.css';
import ManageData from './components/ManageData';
import Meow from './assets/LazyMeow.jpeg'

function App() {
  return (
    <div className="App">
      <h1>Avançando em React</h1>
      { /*IMG em Public */}
      <img src="/meow_jedi.jpg" alt="Um gato segurando um sabre de Luz" />

      { /* IMG em ASSETS */}
      <img src={Meow} alt="Gato preguiçoso" />
      <br /> <br />
      <ManageData />
    </div>
  );
}

export default App;
