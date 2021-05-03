import './App.css';
import { useState } from 'react';

function Tarefa({tarefa, completarTarefa}) {
    function handleChange() {
        completarTarefa(tarefa.nome);
    }
    return (
        <li className='tarefa'><input onChange={handleChange} type='checkbox' checked={tarefa.completado}/>{tarefa.nome}</li>
    )
}

function App() {
    const [tarefas, setTarefas] = useState([]);

    function tarefasRestantes() {
        return tarefas.filter(tarefa=> !tarefa.completado).length
    } 

    function handleInput(e) {
        if (e.key === 'Enter') {
            setTarefas([...tarefas, {nome: e.target.value, completado: false}]);
            e.target.value = '';
        }
    }
    function completarTarefa(nome) {
        // const tarefasAtualizadas = tarefas.map(tarefa => {
        //     if (tarefa.nome === nome) {
        //         return {nome: tarefa.nome, completado: !tarefa.completado};
        //     } 
        //     return tarefa;
        // })
        // setTarefas(tarefasAtualizadas);
        const tarefasAtualizadas = [...tarefas];
        const tarefa = tarefasAtualizadas.find(tarefa => tarefa.nome === nome);
        tarefa.completado = !tarefa.completado;
        setTarefas(tarefasAtualizadas);
    }

    // function todasTarefas() {

    // }
    function tarefasAtivas() {
        tarefas.map(tarefa=> {
            if (tarefa.completado) {
                tarefa.style={display:'none'};
                console.log(tarefa)
            } 
            return;
        })
        {tarefas.map(tarefa => <Tarefa tarefa={tarefa} completarTarefa={completarTarefa}/>)}
    }
    

    return (
        <div className='task-handler'>
            <h1>Tarefas</h1>
            <div className='nova-tarefa'>
                <input className='check' type='checkbox'/>
                <input className='task' type='text' onKeyUp={handleInput} placeholder='Criar uma nova tarefa'/>
            </div>
            <div className='content'>
                <ul>
                    {tarefas.map(tarefa => <Tarefa tarefa={tarefa} completarTarefa={completarTarefa}/>)}
                    
                </ul>
                <div className='tarefas-rodape'>
                    <span>{tarefasRestantes()} Itens Restantes</span>
                    {/* <button onClick={todasTarefas}>Todas</button> */}
                    <button onClick={()=> tarefasAtivas()}>Ativas</button>
                    {/* <button onClick={tarefasCompletadas}>Completada(s)</button>
                    <button onClick={limparTarefas}>Limpar Completadas</button> */}

                </div>
            </div>
        </div>
    )
}

export default App;


