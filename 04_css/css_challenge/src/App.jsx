import './App.css'
import CarDetails from './components/CarDetails'

function App() {
  const carros = [
    {id: 1, marca: 'Ferrari', modelo: 'Testarossa', ano: '1984', km: 67519, isNew: false},
    {id: 2, marca: 'Bugatti', modelo: 'Tourbillion', ano: '2026', km: 0, isNew: true},
    {id: 3, marca: 'Koenigsegg', modelo: 'Jesko Absolut', ano: '2025', km: 0, isNew: true},
    {id: 4, marca: 'Ford-Shelby', modelo: 'Cobra', ano: '1965', km: 70500, isNew: false},
    {id: 5, marca: 'McLaren', modelo: 'F1', ano: '1998', km: 9987, isNew: false},
  ]

  return (
      <div>
        <h1>Detalhes dos Carros</h1>
        {carros.map((carro) => (
          <CarDetails 
            key={carro.id}
            marca={carro.marca}
            modelo={carro.modelo}
            ano={carro.ano}
            km={carro.km}
            isNew={carro.isNew}
          />))}
      </div>
  )
}

export default App
