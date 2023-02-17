import { useState } from 'react';
import { FiSearch } from 'react-icons/fi'
import './styles.css';
import api from './services/api';


function App() {

  const [input, setInput] = useState ('')


  async function handleSearch () {

    if(input === ''){
      alert("Preencha o CEP desejado")
      return;
    }

    //o que vc deseja fazer
    try{
      const response = await api.get(`${input}/json`);
      console.log(response.data)

    }catch{
      alert("Ops! Erro ao buscar")
      setInput("")
    }
  }

  return (

    <div className="container">
      <h1 className="title">Buscador CEP</h1>

      <div className="containerInput">
        <input 
          type="text"
          placeholder="Digite seu CEP..."
          value={input}
          onChange={(e) => setInput(e.target.value) }
        />

        <button className="buttonSearch" onClick={handleSearch}>
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
