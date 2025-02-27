import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home'
import AssociationList from './components/AssociationList';

import './App.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/catalog" element={<Catalog />} /> */}
        <Route path="/associations" element={<AssociationList />} />
        {/* <Route path="/map" element={<Map />} /> */}
      </Routes>
    </Router>
  </StrictMode>,
);
