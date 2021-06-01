import './App.css';
import { useState, useRef } from 'react';

function App() {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const userRef = useRef();
  const passwordRef = useRef();

  function handleSubmit() {
    if (!usuario) return userRef.current.focus();
    if (!senha) return passwordRef.current.focus();
    
    alert('Sucesso')
  }

  return (
    <div>
      <h1>Login</h1>

      <form onSubmit={ev => {ev.preventDefault()}}>
        <label>
          Usuário
          <input ref={userRef} value={usuario} onChange={ev => setUsuario(()=> ev.target.value)} />
        </label>

        <label>
          Senha
          <input ref={passwordRef} type="password" value={senha} onChange={ev => setSenha(()=> ev.target.value)} />
        </label>

        <button onClick={()=> handleSubmit()}>Fazer login</button>
      </form>
    </div>
  );
}

export default App;
