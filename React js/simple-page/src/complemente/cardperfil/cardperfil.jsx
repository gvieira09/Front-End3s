import MyPeople from "../../assets/Captura de tela 2026-04-01 141217.png";
import "./cardperfil.css"


function CardPerfil() {
    return (

        <div class="card-perfil">
        <img class="card-perfil__image" src={MyPeople} alt="imagem do usuario"/>
        </div>
    )
}

export default CardPerfil