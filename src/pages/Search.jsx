import { React, useRef, useState } from 'react';

// Components
import Card from '../components/Card';
import Map from '../components/Map';
import { FilterModal, defaultFilters } from '../components/FilterModal/FilterModal';
import cards from '../Database.json';

const filterData = (filters, data) => {
  const isDefined = (value) => typeof value !== 'undefined';
  const filtered = data
    .filter((item) => !isDefined(filters.price_min)
      || (item.price >= parseInt(filters.price_min, 10) || filters.price_min === '')) // Check price minimum
    .filter((item) => !isDefined(filters.price_max)
      || (item.price <= parseInt(filters.price_max, 10) || filters.price_max === '')) // Check price maximum
    .filter((item) => !isDefined(filters.entire_space)
      || item.entire_space || !filters.entire_space) // Check entire space
    .filter((item) => !isDefined(filters.shared_room)
      || item.shared_room || !filters.shared_room) // Check entire space
    .filter((item) => !isDefined(filters.entire_room)
      || item.entire_room || !filters.entire_room) // Check entire space
    .filter((item) => !isDefined(filters.rooms)
      || (item.rooms >= parseInt(filters.rooms, 10) || filters.rooms === '')) // Check minimum rooms
    .filter((item) => !isDefined(filters.beds)
      || (item.beds >= parseInt(filters.beds, 10) || filters.beds === '')) // Check minimum beds
    .filter((item) => !isDefined(filters.bathrooms)
      || (item.bathrooms > parseInt(filters.bathrooms, 10) || filters.bathrooms === '')) // Check minimum bathrooms
    .filter((item) => !isDefined(filters.wifi)
      || item.amenities.wifi || !filters.wifi) // Check Wi-Fi
    .filter((item) => !isDefined(filters.washing_machine)
      || item.amenities.washing_machine || !filters.washing_machine) // Check Washing machine
    .filter((item) => !isDefined(filters.iron)
      || item.amenities.iron || !filters.iron) // Check iron
    .filter((item) => !isDefined(filters.kitchen)
      || item.amenities.kitchen || !filters.kitchen) // Check kitchen
    .filter((item) => !isDefined(filters.air_conditioning)
      || item.amenities.air_conditioning || !filters.air_conditioning) // Check air conditioning
    .filter((item) => !isDefined(filters.instant_reserve)
      || item.reserve_options.instant_reserve || !filters.instant_reserve) // Check air conditioning
    .filter((item) => !isDefined(filters.self_checkin)
      || item.reserve_options.self_checkin || !filters.self_checkin) // Check air conditioning

    .filter((item) => ((isDefined(filters.bounds) && filters.bounds.length >= 8)
    && item.lat < filters.bounds[0]
    && item.lat > filters.bounds[2]
    && item.lng < filters.bounds[3]
    && item.lng > filters.bounds[1]
    ));
  return filtered;
};

function SearchPage() {
  const [filters, setFilters] = useState(defaultFilters);
  const hoverRef = useRef(() => {});

  const data = filterData(filters, cards);
  return (
    <main className="container-fluid p-0">
      <div className="row g-0 m-0">
        <div className="col p-0">
          <div className="container-fluid p-0">
            <div
              className="d-flex p-2 sticky-top justify-content-between "
              css={`
              background-color: #fff;
              top: var(--navigation-bar-offset, 0);
              border-bottom: 1px solid #dddddd;
              font-size: 16px;
            `}
            >
              <b>
                {data.length}
                {' '}
                acomodações
              </b>
              <button type="button" className="btn btn-outline-dark" data-toggle="modal" data-target="#filter-modal">
                <i className="fa-solid fa-filter" />
                Filtros
              </button>
            </div>

            <div className="row">
              { data.map((loc, index) => (
                <div
                  key={loc.id}
                  css={`
                display: flex;
                width: 40%;
                margin: 5%;
              `}
                >
                  <Card
                    id={index}
                    loc={loc}
                    onMouseEnter={() => { hoverRef.current(index); }}
                    onMouseLeave={() => { hoverRef.current(null); }}
                  />
                </div>
              )) }
            </div>
          </div>
        </div>
        <div className="col-6 d-none d-md-block p-0">
          <div css={`
          box-sizing: border-box;
          position: sticky;
          top: var(--navigation-bar-offset, 0);
          height: calc(100vh - var(--navigation-bar-offset));
        `}
          >
            <Map setHover={hoverRef} filters={{ get: filters, set: setFilters }} data={data} />
          </div>
        </div>
      </div>
      <FilterModal onSubmit={(f) => {
        setFilters({ ...f, bounds: filters.bounds });
      }}
      />
    </main>
  );
}

export default SearchPage;
