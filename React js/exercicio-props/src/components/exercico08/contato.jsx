import "./contato.css";

function Contato({ nome, telefone, email }) {
  return (
    <div className="card-contato">
      <h2>{nome}</h2>

      <p>
        <strong>Telefone:</strong> {telefone}
      </p>

      <p>
        <strong>Email:</strong> {email}
      </p>
    </div>
  )
}

export default Contato;