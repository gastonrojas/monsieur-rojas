import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart/Cart';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';

function App() {


  return (
    <BrowserRouter className="App">
      <NavBar />
      <Routes>
        <Route exact path='/' element={<ItemListContainer  greetings="Bienvenidos a la tienda!" />}/>
        <Route exact path='/detalle/:idDetalle' element={<ItemDetailContainer />} />
        <Route exact path='/categoria/:idCategoria' element={<ItemListContainer greetings="Bienvenidos a la tienda!" />} />
        <Route exact path='/cart' element={<Cart/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
