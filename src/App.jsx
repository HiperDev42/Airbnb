import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import NavBar from './NavBar'
import Card from './Card'
import Map from './Map'

function App() {
  const [count, setCount] = useState(0)
  const cards = [
    Card({
      image: 'https://a0.muscache.com/im/pictures/2ff007be-3213-4768-ab29-ab36de930c3a.jpg?im_w=720',
      title: 'Condomínio em Morumbi',
      description: 'Lindo apartamento 4 pessoas, estacionamento.',
      price: 973,
    }),
    Card({
      image: 'https://a0.muscache.com/im/pictures/miso/Hosting-51432867/original/1f431134-9f45-4bad-aac1-d7483a12b58d.jpeg?im_w=720',
      title: 'Condomínio em Santa Mônica',
      description: 'Apartamento completo, fácil de desbloquear.',
      price: 973,
    }),
    Card({
      image: 'https://a0.muscache.com/im/pictures/2ff007be-3213-4768-ab29-ab36de930c3a.jpg?im_w=720',
      title: 'Condomínio em Morumbi',
      description: 'Lindo apartamento 4 pessoas, estacionamento.',
      price: 973,
    }),
    Card({
      image: 'https://a0.muscache.com/im/pictures/miso/Hosting-51432867/original/1f431134-9f45-4bad-aac1-d7483a12b58d.jpeg?im_w=720',
      title: 'Condomínio em Santa Mônica',
      description: 'Apartamento completo, fácil de desbloquear.',
      price: 973,
    }),
    Card({
      image: 'https://a0.muscache.com/im/pictures/2ff007be-3213-4768-ab29-ab36de930c3a.jpg?im_w=720',
      title: 'Condomínio em Morumbi',
      description: 'Lindo apartamento 4 pessoas, estacionamento.',
      price: 973,
    }),
    Card({
      image: 'https://a0.muscache.com/im/pictures/miso/Hosting-51432867/original/1f431134-9f45-4bad-aac1-d7483a12b58d.jpeg?im_w=720',
      title: 'Condomínio em Santa Mônica',
      description: 'Apartamento completo, fácil de desbloquear.',
      price: 973,
    }),
    Card({
      image: 'https://a0.muscache.com/im/pictures/2ff007be-3213-4768-ab29-ab36de930c3a.jpg?im_w=720',
      title: 'Condomínio em Morumbi',
      description: 'Lindo apartamento 4 pessoas, estacionamento.',
      price: 973,
    }),
    Card({
      image: 'https://a0.muscache.com/im/pictures/miso/Hosting-51432867/original/1f431134-9f45-4bad-aac1-d7483a12b58d.jpeg?im_w=720',
      title: 'Condomínio em Santa Mônica',
      description: 'Apartamento completo, fácil de desbloquear.',
      price: 973,
    }),
    Card({
      image: 'https://a0.muscache.com/im/pictures/2ff007be-3213-4768-ab29-ab36de930c3a.jpg?im_w=720',
      title: 'Condomínio em Morumbi',
      description: 'Lindo apartamento 4 pessoas, estacionamento.',
      price: 973,
    }),
    Card({
      image: 'https://a0.muscache.com/im/pictures/miso/Hosting-51432867/original/1f431134-9f45-4bad-aac1-d7483a12b58d.jpeg?im_w=720',
      title: 'Condomínio em Santa Mônica',
      description: 'Apartamento completo, fácil de desbloquear.',
      price: 973,
    }),
  ];

  return (
    <div className="App">
      <NavBar />
      <main>
        <div className="cards">
          <div className="filter">
            <b>Mais de mil acomodações</b>
            <button>Filtros</button>
          </div>
          {cards}
        </div>
        <div className="map">
          <Map />
        </div>
      </main>
    </div>
  )
}

export default App
