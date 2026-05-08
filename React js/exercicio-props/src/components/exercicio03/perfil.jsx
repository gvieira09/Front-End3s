import "./perfil.css"

function Perfil( { nome, idade, profissao } ) {
  return (
    <div className="card-perfil">
      <h2>{nome}</h2>

      <p>
        <strong>Idade:</strong> {idade}
      </p>

      <p>
        <strong>Profissão:</strong> {profissao}
      </p>
    </div>
  )
}

export default Perfil;