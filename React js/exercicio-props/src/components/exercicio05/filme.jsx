import "./filme.css"

function Filme( {titulo, ano, genero, nota} ) {
    return(
        <p>Titulo:{titulo}, Ano:{ano}, Genero:{genero}, Nota:{nota} </p>
    )

}

export default Filme