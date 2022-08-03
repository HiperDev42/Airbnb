import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

import './App.css'

import NavBar from './components/NavBar'
import Card from './components/Card'
import Map from './components/Map'
import FilterModal from './components/FilterModal/FilterModal'
import cards from './Database.json'

const CardWrapper = styled.div`
  display: flex;
  width: 40%;
  margin: 5%;
`;

const filterData = (filters, data) => {
  const filtered = data
  .filter((item) => {return (item.price > parseInt(filters.price_min) || filters.price_min == '')}) // Check price minimum
  .filter((item) => {return (item.price < parseInt(filters.price_max) || filters.price_max == '')}) // Check price maximum

  return filtered
}

function App() {
  const [count, setCount] = useState(0)
  const [filters, setFilters] = useState({
    price_min: '',
    price_max: '',
  })
  const hoverRef = useRef((x) => {})

  const data = filterData(filters, cards)
  return (
    <div className="App">
      <NavBar />
      <main className='container-fluid p-0'>
        <div className="row g-0 m-0">
          <div className="col p-0">
          <div className='container-fluid p-0'>
              <div className="d-flex p-2 sticky-top justify-content-between filter-bar bg-white">
                <b>{data.length} acomodações</b>
                <button type='button' className='btn btn-outline-dark' data-toggle='modal' data-target='#filter-modal'><i className="fa-solid fa-filter"></i>Filtros</button>
              </div>
              
            <div className="row">
              { data.map((loc, index) => (
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
            <Map setHover={hoverRef} markers={ data }/>
          </div>
          </div>
        </div>
      </main>
      <FilterModal onSubmit={setFilters} />
    </div>
  )
}

export default App
