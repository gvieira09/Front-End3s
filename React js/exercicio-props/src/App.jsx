import './App.css'
import Title from './components/title/title'
import Saudacao from "./components/exercicio01/saudacao"
import Produto from "./components/exercicio02/produto"
import Perfil from "./components/exercicio03/perfil"
import Botao from "./components/exercicio04/botao"
import Filme from "./components/exercicio05/filme"
import Aluno from "./components/exercicio06/aluno"
import minhaImagem from "./assets/images.jpg"
import MyChildren from "./components/exercicio07/mychildren"
import Contato from "./components/exercico08/contato";

function App() {


    return (

        <>
            <Title texto="Guilherme" sobrenome="Scobar" idade="16" />
            <Title texto="Milena" sobrenome="Mares" idade="17" />
            <Title texto="Lilian" sobrenome="Cristine" idade="38" /> 

            <Saudacao nome="Guilherme" />
            <Saudacao nome="Milena" />
            <Saudacao nome="Eduardo" />

            <Produto nome="caneta," preco="5,00," descricao="caneta super loka" /> 

            <Perfil nome="Guilherme Vieira" idade={18} profissao="Desenvolvedor Front-End"/> 

            <Botao texto="Julio" cor="black" />
            <Botao texto="Cesar" cor="red" />

            <Filme titulo="A revolta do julio" ano="2067" genero="apoio LGBT" nota="67/100" /> 
            <Filme titulo="A revolta do gustavo" ano="2069" genero="apoio africano" nota="99/100" /> 
            <Filme titulo="A revolta do pai do julio" ano="2026" genero="terror" nota="90/100" /> 

            <Aluno nome="Julio Cocoricó" curso="Desenvolvimento de Sistemas" imagem={minhaImagem}/> 


            <MyChildren>
            <Produto nome="Tenis Nike" preco={220.90} descricao="Tenis da Nike"/>
            </MyChildren>   
            </> 
    
        
    




    )
}

export default App;

