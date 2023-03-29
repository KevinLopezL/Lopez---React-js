import './App.css';
import ProductCard from './componentes/ProductCard/ProductCard';
import Navbar from './componentes/Navbar/Navbar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer greeting="Bienvenido"/>
      <ProductCard />

    </div>
  );
}

export default App;