import './App.css';
import { useState } from 'react'

const glossario = [
  {
    termo: "HTML",
    definicao: "Linguagem de marcação responsável por definir a estrutura de uma página web"
  },
  {
    termo: "CSS",
    definicao: "Linguagem responsável por definir o estilo de uma página web"
  },
  {
    termo: "Javascript",
    definicao: "Linguagem de programação responsável por ditar o comportamento de uma página web"
  }
];


function App() {
  const [mostrando, setMostrando] = useState(false);

  return (
      <div>
          <h1>Meu app</h1>
          <button onClick={()=> setMostrando((prevState) => !prevState)}>{mostrando ? "Fechar" : "Abrir"} menu</button>

          {mostrando && (
              <>
                  <button>Adicionar entrada</button>
                  <button>Remover entrada</button>
              </>
          )}

          <dl>
              {glossario.map(entrada => (
                  <>
                    <dt>{entrada.termo}</dt>
                    <dd>{entrada.definicao}</dd>
                  </>
              ))}
          </dl>
      </div>
  );
}

export default App;
