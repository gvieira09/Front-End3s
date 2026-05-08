import "./produto.css"

function Produto( {nome, preco, descricao} ) {
    return(
        <p>Produto - {nome} Preco - {preco} Descricao - {descricao}</p>
)
}

export default Produto