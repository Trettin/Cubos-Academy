import './App.css';
import CustomHeader from './CustomHeader'
import Itens from './Itens'
import CustomFooter from './CustomFooter'
import {filmes} from './Filmes'

function App() {
  return (
    <div className="App">

      <CustomHeader titulo='CubosFlix' corTexto='white' corFundo='black' />

      <Itens filmes={filmes} inicial='1' final='6'/>

      <CustomFooter titulo='Copyright © Cubos Academy' corTexto='white' corFundo='black'/>
    </div>
  );
}

export default App;
