// import logo from './logo.svg';
import './App.css';
import FirstComponent from './components/FirstComponent'; // Se o arquivo for JS, não precisa da extensão
import TemplateExpressions from './components/TemplateExpressions';
import Events from './components/Events';
import Challege from './components/Challenge';

function App() {
  return (
    <div className="App">
      <h1>Fundamentos do React</h1>
      <TemplateExpressions />
      <FirstComponent /><br/>
      <Events />
      <Challege />
    </div>
  );
}

export default App;
