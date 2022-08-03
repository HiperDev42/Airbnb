import { useRef, useState } from 'react'
import styled from 'styled-components'

import './App.css'

import NavBar from './components/NavBar'
import Card from './components/Card'
import Map from './components/Map'
import FilterModal from './components/FilterModal'
import cards from './Database.json'

const CardWrapper = styled.div`
  display: flex;
  width: 40%;
  margin: 5%;
`;

function App() {
  const [count, setCount] = useState(0)
  const hoverRef = useRef((x) => {})

  return (
    <div className="App">
      <NavBar />
      <main className='container-fluid p-0'>
        <div className="row g-0 m-0">
          <div className="col p-0">
          <div className='container-fluid p-0'>
              <div className="d-flex p-2 sticky-top justify-content-between filter-bar bg-white">
                <b>Mais de mil acomodações</b>
                <button type='button' className='btn btn-outline-dark' data-toggle='modal' data-target='#filter-modal'><i className="fa-solid fa-filter"></i>Filtros</button>
              </div>
              
            <div className="row">
              { cards.map((loc, index) => (
                <CardWrapper>
                  <Card
                    key={index} id={index} loc={ loc }
                    onMouseEnter={() => {hoverRef.current(index)}}
                    onMouseLeave={() => {hoverRef.current(null)}}
                  />
                </CardWrapper>
              )) }
            </div>
          </div>
          </div>
          <div className="col-6 d-none d-md-block p-0">
          <div className="map">
            <Map setHover={hoverRef} markers={ cards }/>
          </div>
          </div>
        </div>
      </main>
      <FilterModal />
    </div>
  )
}

export default App
