import { BrowserRouter, Route, Routes, Link, Navigate } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Login from './components/Login';
import Logout from './components/Logout';
import { useState } from 'react';

function App() {

  const [isSigned, setSigned] = useState(localStorage.getItem("user"));

  return (
    <div>
      <Nav />
      {/* <Link to="/">Home</Link>
      <Link to="/dashboard">Dashboard</Link> */}
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/dashboard'
          element={isSigned ? <Dashboard /> : <Navigate to="/" />} />
      </Routes>
      {/* {
        isSigned ?
          <Logout setSigned={setSigned} /> : <Login setSigned={setSigned} />
      } */}
      <Footer />
    </div>
  );
}

export default App;
