import './App.scss';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import './Components/Home/Home.scss'


function App() {
  return <Router>
<Header/>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </Router>
}

export default App;
