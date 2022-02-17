import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart/Cart';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import { CartContextProvider} from './context/cartContext';

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter className="App">
        <NavBar />
        <Routes>
          <Route exact path="/" element={<ItemListContainer greetings="Bienvenidos a la tienda!" />}/>
          <Route exact path="/detail/:idDetail" element={<ItemDetailContainer />} />
          <Route exact path="/category/:idCategory" element={<ItemListContainer greetings="Bienvenidos a la tienda!" />} />
          <Route exact path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
