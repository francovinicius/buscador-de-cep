import { useState } from 'react';
import { FiSearch } from 'react-icons/fi'
import './styles.css';
import api from './services/api';


function App() {

  const [input, setInput] = useState ('');
  const [cep, setCep] = useState({});


  async function handleSearch () {

    if(input === ''){
      alert("Preencha o CEP desejado")
      return;
    }

    //o que vc deseja fazer
    try{
      const response = await api.get(`${input}/json`);
      setCep(response.data)
      setInput("")

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
          placeholder="Digite o CEP desejado"
          value={input}
          onChange={(e) => setInput(e.target.value) }
        />

        <button className="buttonSearch" onClick={handleSearch}>
          <FiSearch size={24} color="#fff"/>
        </button>
      </div>



      {Object.keys(cep).length > 0 && (

        <main className="main">
          <h2>CEP: {cep.cep}</h2>

          <span>Logradouro: {cep.logradouro}</span>
          <span>Cidade/Estado:{cep.localidade} - {cep.uf}</span>
          <span>Bairro: {cep.bairro}</span>
          <span>DDD: {cep.ddd}</span>

        </main>
        
      )}
      
    </div>
      
  );
}

export default App;
