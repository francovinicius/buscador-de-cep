import { FiSearch } from 'react-icons/fi'
import './styles.css';

function App() {
  return (
    <div className="container">
      <h1 className="title">Buscador CEP</h1>

      <div className="containerInput">
        <input 
          type="text"
          placeholder="Digite seu CEP..."
        />

        <button className="buttonSearch">
          <FiSearch size={24} color="#fff"/>
        </button>
      </div>

      <main className="main">
        <h2>CEP: 27288145</h2>

        <span>Logradouro</span>
        <span>complemento</span>
        <span>cidade</span>
        <span>Estado</span>

      </main>
      
    </div>
  );
}

export default App;
