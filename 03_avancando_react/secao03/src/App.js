import './App.css';
import ManageData from './components/ManageData';
import Meow from './assets/LazyMeow.jpeg'
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';
import ShowUsername from './components/ShowUsername';
import CarDetails from './components/CarDetails';
import { useState } from 'react';
import Fragments from './components/Fragments';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';
import UserDetails from './components/UserDetails';
import Form from './components/Form';
import PropTypes from 'prop-types'

function App() {

  const [cars] = useState([
    {id: 1, marca: 'Ferrari', modelo: 'Testarossa', ano: '1984', km: 67519, isNew: false},
    {id: 2, marca: 'Bugatti', modelo: 'Tourbillion', ano: '2026', km: 0, isNew: true},
    {id: 3, marca: 'Koenigsegg', modelo: 'Jesko Absolut', ano: '2025', km: 0, isNew: true},
    {id: 4, marca: 'Ford-Shelby', modelo: 'Cobra', ano: '1965', km: 70500, isNew: false},
    {id: 5, marca: 'McLaren', modelo: 'F1', ano: '1998', km: 9987, isNew: false},
  ])

  const [message, setMesage] = useState('');

  const [mess, setMess] = useState([]);

  const handleFeed = (x) => setMess([...mess, x]) 

  const handleMessage = (msg) => setMesage(msg);

  const people = [
    {id: 1, nome: 'Marco', idade: 36, profissao:'Programador'},
    {id: 2, nome: 'Ezio', idade: 12, profissao:'Estudante'},
    {id: 3, nome: 'Marcelo', idade: 28, profissao:'Financista'}
]

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

      <CarDetails id={6} marca='Fiat' modelo='Mobi' ano='2020' km={216500} isNew={false}/>
      <CarDetails id={7} marca={'VolksWagen'} modelo={'Virtus'} ano={'2024'} km={1000} isNew={false}/>
      { /*Podemos reaproveitar os componentes quantas vezes for necessário.*/}

      {/*Criando um loop com os carros do cars. */}
      {cars.map((car) => (
        <CarDetails key={car.id} id={car.id} marca={car.marca} modelo={car.modelo}
         ano={car.ano} km={car.km} isNew={car.isNew} />
      ))}

      <Fragments />

      {/* Children Props */}
      <Container test_string={'Just Testing'}>
        <h3>Testando Children Props</h3>
        <p>Children Props permitem que passemos códigos HTML 
          para serem "Abraçados" por outros componentes pai.
        </p>
      </Container>

      <ExecuteFunction myFunction={() => (alert('Butãozinho clicado'))} />

      { /* State Lift - Elevação de Estado */}
      <Message msg={message}/>
      <ChangeMessageState handleMessage={handleMessage}/>
      {/*Podemos mudar states usando funções entre components */}

      {/*Desafio do final do módulo*/}
      {people.map((person) => (
        <UserDetails 
          key={person.id}
          nome={person.nome}
          idade={person.idade}
          profissao={person.profissao}
        />
      ))}
       <Form func={handleFeed}/>

       {mess.map((mes, i) => (
        <p key={200+i}>{mes.nome} falou: {mes.message}</p>
      ))}
    </div>
  );
}

export default App;
