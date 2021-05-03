
export default function Itens({filmes, inicial, final}) {
    const selecaoFilmes = filmes.filter(filme => filme.id>= inicial && filme.id <= final)
    return (
        <div className="content">
            {
            selecaoFilmes.map(item => {
                return <div className="card" key={item.id}>
                <img src={item.image} alt={item.title} />
                <h2>{item.title}</h2>
                </div>
            })
            }
        </div>
    )
}
