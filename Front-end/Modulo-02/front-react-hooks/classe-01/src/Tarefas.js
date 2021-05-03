import Tarefa from './Tarefa'

export default function Tarefas({tarefas, filtro, setTarefas}) {
    function completarTarefa(nome) {
        const tarefasAtualizadas = [...tarefas];
        const tarefaCompletada = tarefasAtualizadas.find(tarefa => tarefa.nome === nome);
        tarefaCompletada.completado = !tarefaCompletada.completado;
        setTarefas(tarefasAtualizadas);
    }

    function handleDelete(nome) {
        const novasTarefas = tarefas.filter(tarefa => tarefa.nome !== nome);
        setTarefas(novasTarefas);
    }

    function filtrarTarefas(tarefa) {
        if (filtro === 'todas') return tarefa;
        if (filtro === 'completadas' && tarefa.completado) return tarefa;
        if (filtro === 'ativas' && !tarefa.completado) return tarefa;
    }

    return (
        <ul>
            {tarefas.filter(filtrarTarefas).map(tarefa => <Tarefa tarefa={tarefa} completarTarefa={completarTarefa} deletarTarefa={handleDelete} />)}
        </ul>
    )
}