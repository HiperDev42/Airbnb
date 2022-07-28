import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import NavBar from './NavBar'
import Card from './Card'
import Map from './Map'
import { cards } from './Database'
console.log(cards)

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <NavBar />
      <main>
        <div className="cards">
          <div className="d-flex p-2 sticky-top justify-content-between filter-bar bg-white">
            <b>Mais de mil acomodações</b>
            <button type='button' className='btn btn-outline-dark'><i class="fa-solid fa-filter"></i>Filtros</button>
          </div>
          { cards.map((loc, index) => (
            <Card key={index} loc={ loc } />
          )) }
        </div>
        <div className="map">
          <Map
            markers={ cards }/>
        </div>
      </main>
    </div>
  )
}

export default App
