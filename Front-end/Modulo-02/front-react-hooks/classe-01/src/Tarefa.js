import './Tarefa.css'

export default function Tarefa({tarefa, completarTarefa, deletarTarefa}) {
    function handleChange() {
        completarTarefa(tarefa.nome)
    }
    function handleClick() {
        deletarTarefa(tarefa.nome)
    }
    return (
        <li className={tarefa.completado ? 'completada tarefa' : 'tarefa'}>
            <input onChange={handleChange} type='checkbox' checked={tarefa.completado}/>{tarefa.nome} 
            <button onClick={handleClick}>X</button> 
        </li>
    );
}