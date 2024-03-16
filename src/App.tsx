import React, { useContext } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes, Link, useNavigate } from 'react-router-dom';
import Home from './pages/Home/Home';
import Private from './pages/Private/Private';
import { RequireAuth } from './contexts/RequireAuth';
import { AuthContext } from './contexts/AuthContext';

function App() {
  const auth = useContext(AuthContext)
  const navigate = useNavigate()

  const handleLogout = async () => {
    await auth.signout()
    //navigate('/')
    window.location.href = window.location.href
  }


  return (
    <div className="App">
      <header>
        <h1>Header do Site</h1>

        <nav>
          <Link to="/">Home</Link>
          <Link to="/private">Página Privada</Link>
          {auth.user && <button onClick={handleLogout}>Sair</button> }
        </nav>

        <hr />

        <Routes>
          <Route path="/"  element={<Home />}  />
          <Route path="/private"  element={<RequireAuth><Private /></RequireAuth>}  />          
        </Routes>
      </header>
    </div>
  );
}

export default App;
