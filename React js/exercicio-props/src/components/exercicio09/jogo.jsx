import "./jogo.css";

function Jogo({ nome, plataforma, preco, imagem }) {
  return (
    <div className="card-jogo">
      <img src={imagem} alt={nome} className="imagem-jogo" />

      <h2>{nome}</h2>

      <p>
        <strong>Plataforma:</strong> {plataforma}
      </p>

      <p>
        <strong>Preço:</strong> {preco}
      </p>
    </div>
  )
}

export default Jogo