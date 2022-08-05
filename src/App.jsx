import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

import './App.css'

import NavBar from './components/NavBar'
import Card from './components/Card'
import Map from './components/Map'
import {FilterModal, defaultFilters} from './components/FilterModal/FilterModal'
import cards from './Database.json'

const CardWrapper = styled.div`
  display: flex;
  width: 40%;
  margin: 5%;
`;

const filterData = (filters, data, bounds) => {
  const filtered = data
  .filter((item) => {return (item.price >= parseInt(filters.price_min) || filters.price_min == '')})    // Check price minimum
  .filter((item) => {return (item.price <= parseInt(filters.price_max) || filters.price_max == '')})    // Check price maximum
  .filter((item) => {return item.entire_space || !filters.entire_space})                                // Check entire space
  .filter((item) => {return item.shared_room || !filters.shared_room})                                  // Check entire space
  .filter((item) => {return item.entire_room || !filters.entire_room})                                  // Check entire space
  .filter((item) => {return (item.rooms >= parseInt(filters.rooms) || filters.rooms == '')})            // Check minimum rooms
  .filter((item) => {return (item.beds >= parseInt(filters.beds) || filters.beds == '')})               // Check minimum beds
  .filter((item) => {return (item.bathrooms > parseInt(filters.bathrooms) || filters.bathrooms == '')}) // Check minimum bathrooms
  .filter((item) => {return item.amenities.wifi || !filters.wifi})                                      // Check Wi-Fi
  .filter((item) => {return item.amenities.washing_machine || !filters.washing_machine})                // Check Washing machine
  .filter((item) => {return item.amenities.iron || !filters.iron})                                      // Check iron
  .filter((item) => {return item.amenities.kitchen || !filters.kitchen})                                // Check kitchen
  .filter((item) => {return item.amenities.air_conditioning || !filters.air_conditioning})              // Check air conditioning
  .filter((item) => {return item.reserve_options.instant_reserve || !filters.instant_reserve})          // Check air conditioning
  .filter((item) => {return item.reserve_options.self_checkin || !filters.self_checkin})                // Check air conditioning

  .filter((item) => {return (
    item.lat < filters.bounds[0] &&
    item.lat > filters.bounds[2] &&
    item.lng < filters.bounds[3] &&
    item.lng > filters.bounds[1]
  )})
  console.log(filtered)
  return filtered
}

function App() {
  const [count, setCount] = useState(0)
  const [filters, setFilters] = useState(defaultFilters)
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
            <Map setHover={hoverRef} filters={{get: filters, set: setFilters}} markers={ data }/>
          </div>
          </div>
        </div>
      </main>
      <FilterModal onSubmit={setFilters} />
    </div>
  )
}

export default App
