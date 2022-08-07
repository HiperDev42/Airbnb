import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

// Components
import NavBar from './components/NavBar';

// Pages
import Search from './pages/Search';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/" element={ <Search/> }/>
      </Routes>
    </div>
  );
}

export default App;