import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import Counter from './components/Counter/Counter'

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greetings='Bienvenidos a la tienda!'/>
      <Counter />
    </div>
  );
}

export default App;
