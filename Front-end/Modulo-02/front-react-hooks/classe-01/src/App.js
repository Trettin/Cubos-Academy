import './App.css';
import Tarefas from './Tarefas'
import Filtros from './Filtros'


import { useState } from 'react';

function App() {
    const [tarefas, setTarefas] = useState([]);
    const [filtro, setFiltro] = useState('todas');


    function tarefasRestantes() {
        return tarefas.filter(tarefa=> !tarefa.completado).length
    } 

    function handleNovaTarefa({key, target}) {
        if (key === 'Enter' && target.value) {
            setTarefas([...tarefas, {nome: target.value, completado: false}]);
            target.value = '';
        }
    }
    
    

    function handleClearComplete() {
        const tarefasIncompletas = tarefas.filter(tarefa => !tarefa.completado);
        setTarefas(tarefasIncompletas);
    }

    function handleCompleteAll() {
        const tarefasCompletadas = tarefas.map(tarefa => {
            return {nome: tarefa.nome, completado: true}
        });
        setTarefas(tarefasCompletadas);
    }

    return (
        <div className='task-handler'>
            <h1>Tarefas</h1>
            <div className='nova-tarefa'>
                <button className='a' onClick={handleCompleteAll}>()</button>
                <input className='task' type='text' onKeyUp={handleNovaTarefa} placeholder='Criar uma nova tarefa'/>
            </div>
            <div className='content'>

                <Tarefas tarefas={tarefas} filtro={filtro} setTarefas={setTarefas} />    

                <div className='tarefas-rodape'>
                    <span>{tarefasRestantes()} Itens Restantes</span>

                    <Filtros setFiltro={setFiltro} />

                    <button onClick={handleClearComplete}>Limpar Completadas</button>
                </div>
            </div>
        </div>
    )
}

export default App;




