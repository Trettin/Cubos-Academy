import { formatarDinheiro } from "../utils/dinheiro";
import { useContext } from 'react';
import ContextoDoCarrinho from '../context';

export function Produto({
  nome,
  preco,
  foto,
  id,
  qtdCarrinho
}) {
  const {incrementarCarrinho} = useContext(ContextoDoCarrinho);

  return (
    <article className={`produto ${qtdCarrinho > 0 ? "selecionado" : ""}`}>
      <img src={foto} alt="" />
      <h3>{nome}</h3>
      <span className="preco">R${formatarDinheiro(preco)}</span>
      <button onClick={() => incrementarCarrinho(id,1)}>Kero + 1</button>
      <span className={`badge ${qtdCarrinho === 0 ? "zero" : ""}`}>
        {qtdCarrinho}
      </span>
    </article>
  );
}
