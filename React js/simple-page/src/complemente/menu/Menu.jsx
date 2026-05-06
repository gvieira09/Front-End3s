import "./Menu.css";
import MyPeople from "../../assets/Captura de tela 2026-04-01 141217.png";

function Menu(){
    return(
    <nav class="menu">
        <a href="#" className="menu__item"> Home</a>
        <a href="#" className="menu__item" > Quem somos</a>
        <a href="#" className="menu__item">  Contato</a>
        <a href="#" className="menu__item menu__item--singin" > Entrar</a>
        <a href="#" className ="menu__item menu__item--singup"> Cadastrar</a>
    
        <div class="card-perfil">
        <img class="card-perfil__image" src={MyPeople} alt="imagem do usuario"/>
    </div>
    </nav>
     
    );
}

export default Menu