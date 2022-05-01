import { BrowserRouter, Route, Routes, Link, Navigate } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';
import Graph from './components/Graph';
import Home from './pages/Home';
import { useState } from 'react';

function App() {

  const [isSigned, setSigned] = useState(localStorage.getItem("user"));

  return (
    <div>
      <Nav setSigned={setSigned} isSigned={isSigned} />
      <Routes>
        <Route exact path='/' element={<Home setSigned={setSigned} isSigned={isSigned} />} />
        <Route path='/dashboard/:id'
          element={isSigned ? <Dashboard /> : <Navigate to="/" />} />
        <Route path='/dashboard'
          element={isSigned ? <Dashboard /> : <Navigate to="/" />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
