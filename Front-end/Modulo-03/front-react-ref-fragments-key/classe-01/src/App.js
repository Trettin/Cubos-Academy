import './App.css';
import { useState  } from 'react';

const pratos = [
  {
    nome: "Pizza vegana",
    preco: 50,
    quantidade: 0,
  },
  {
    nome: "Kit esfirras vegana",
    preco: 35,
    quantidade: 0,
  },
  {
    nome: "Brownie vegano",
    preco: 10,
    quantidade: 0,
  }
];

function Prato({nome, preco, quantidade, setQtd}) {
  return(
    <>
      <label htmlFor={nome}>
        {nome} <br />
        <input type="number" value={quantidade} min={0} onChange={(ev)=> setQtd(ev.target.valueAsNumber)}/> 
        {' '} &times; R${preco} = R${preco * quantidade}
      </label>

    </>
  );
}

function App() {
  const [qtds, setQtds] = useState({});
  pratos.sort((p1, p2) => (qtds[p2.nome] || 0) - (qtds[p1.nome] || 0));

  return (
    <div className="App">
      <h1>Cardápio</h1>
      {pratos.map(prato => (
          <Prato
            key={prato.nome}
            nome={prato.nome}
            preco={prato.preco}
            quantidade={qtds[prato.nome] || 0}
            setQtd={(qtd) => setQtds((qtds) => ({...qtds, [prato.nome]: qtd}))}
          />
        )
      )}
    </div>
  );
}

export default App;
