import React, { useState } from 'react';
import axios from 'axios'
import { Local } from './types/app'


function App() {

  const [cep, setCep] = useState<String>("")
  const [dados, setDados] = useState<Local>()

  const getCep = () => {
    axios.get(`https://viacep.com.br/ws/${cep}/json/`)
      .then(resposta => setDados(resposta.data))
      
  }

  return (
    <div className="App">
      <input type="text" onChange={(event) => setCep(event.target.value)} />
      <button onClick={getCep}>Consulte seu Cep</button>

      <h1>Localização</h1>
      {
        <>
          <p>CEP: {dados?.cep}</p>
          <p>Logradouro: {dados?.logradouro}</p>
          <p>Bairro: {dados?.bairro}</p>
          <p>Cidade: {dados?.localidade}</p>
          <p>UF: {dados?.uf}</p>
          <p>DDD:({dados?.ddd})</p>

        </>

      }

    </div>
 
  );
}

export default App;
