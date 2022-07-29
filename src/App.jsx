import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import NavBar from './NavBar'
import Card from './Card'
import Map from './Map'
import FilterModal from './components/FilterModal'
import cards from './Database.json'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <NavBar />
      <FilterModal />
      <main className='container-fluid p-0'>
        <div className="row g-0 m-0">
          <div className="col p-0">
          <div className='container-fluid p-0'>
              <div className="d-flex p-2 sticky-top justify-content-between filter-bar bg-white">
                <b>Mais de mil acomodações</b>
                <button type='button' className='btn btn-outline-dark' data-toggle='modal' data-target='#filter-modal'><i class="fa-solid fa-filter"></i>Filtros</button>
              </div>
              
            <div className="row">
              { cards.map((loc, index) => (
                  <Card key={index} loc={ loc } />
              )) }
            </div>
          </div>
          </div>
          <div className="col-6 d-none d-md-block p-0">
          <div className="map">
            <Map
              markers={ cards }/>
          </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
