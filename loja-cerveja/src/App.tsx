import { Routes, Route } from 'react-router-dom'
import Login from './Paginas/Login/Login';
import Catalogo from './Paginas/Catalogo/Catalogo';


function App() {

  return (
    <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/catalogo" element={<Catalogo/>} />
  </Routes>
  );
}

export default App;