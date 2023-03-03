
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import AptAddForm from './pages/AptAddForm';
import AptList from './pages/AptList';
import Error from './pages/Error';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

function App() {



  return (
    <div className="App">

      <Nav />


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
