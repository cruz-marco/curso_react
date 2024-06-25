import './App.css';
import ManageData from './components/ManageData';
import Meow from './assets/LazyMeow.jpeg'
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';
import ShowUsername from './components/ShowUsername';
import CarDetails from './components/CarDetails';

function App() {

  return (
    <div className="App">
      <h1>Avançando em React</h1>
      { /*IMG em Public */}
      <img src="/meow_jedi.jpg" alt="Um gato segurando um sabre de Luz" /><br />

      { /* IMG em ASSETS */}
      <img src={Meow} alt="Gato preguiçoso" />
      <br /> <br />
      <ManageData /><br />
      <ListRender /><br />
      <ConditionalRender /><br />
      <ShowUsername nome='Marco Cruz'/><br />
      { /*Propos podem receber valores (de qualquer tipo), variáveis, e até mesmo useStates. */}

      <CarDetails marca='Fiat' modelo='Mobi' ano='2020' km={216500}/>

    </div>
  );
}

export default App;
