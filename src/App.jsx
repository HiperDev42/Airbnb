import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Components
import NavBar from './components/NavBar';

// Pages
import Search from './pages/Search';
import Details from './pages/Details';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
