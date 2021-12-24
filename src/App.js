import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greetings='Bienvenidos a la tienda!'/>
    </div>
  );
}

export default App;
