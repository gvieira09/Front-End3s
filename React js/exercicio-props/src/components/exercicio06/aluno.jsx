import "./aluno.css";

function Aluno({ nome, curso, imagem }) {
  return (
    <div className="card-aluno">
      <img src={imagem} alt={nome} className="imagem-aluno" />

      <h2>{nome}</h2>

      <p>{curso}</p>
    </div>
  );
}

export default Aluno;