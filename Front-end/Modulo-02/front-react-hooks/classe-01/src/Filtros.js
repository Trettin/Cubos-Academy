import { useState} from 'react';
import './Filtros.css';

export default function Filtros({setFiltro}) {
    const [filtroAtivo, setFiltroAtivo] = useState('todas');

    function handleFilterChange(novofiltro) {
        setFiltroAtivo(novofiltro);
        setFiltro(novofiltro);
    }

    return (
        <div className='filtro-container'>
            <button onClick={()=> handleFilterChange('todas')} className= {filtroAtivo === 'todas' ? 'filtro filtro-ativo' : 'filtro'}>Todas</button>
            <button onClick={()=> handleFilterChange('ativas')} className= {filtroAtivo === 'ativas' ? 'filtro filtro-ativo' : 'filtro'}>Ativas</button>
            <button onClick={()=> handleFilterChange('completadas')} className= {filtroAtivo === 'completadas' ? 'filtro filtro-ativo' : 'filtro'}>Completada(s)</button>
        </div>
    )
}