
import { useState, useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import AptAddForm from './pages/AptAddForm';
import AptList from './pages/AptList';
import Error from './pages/Error';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

import { ThemeContext } from './context/theme.context';

function App() {

  const { toggleDarkMode, selectTheme, selectBtnTheme } = useContext(ThemeContext)

  return (
    <div className="App" style={selectTheme}>

      <button style={selectBtnTheme} onClick={toggleDarkMode}>Click</button>

      <Nav />
      {/* <Nav toggleDarkMode={toggleDarkMode}/> */}

      <Routes>

        <Route path="/" element={ <Home /> } />
        <Route path="/pisos/list" element={ <AptList/> } />
        <Route path="/pisos/add-form" element={ <AptAddForm /> } />

        {/* rutas de errores */}

        <Route path="/error" element={ <Error /> }/>
        <Route path="*" element={ <NotFound /> }/>

      </Routes>


    </div>
  );
}

export default App;
