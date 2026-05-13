import { useState } from "react"
import "./cardfruta.css"

export default function CardFruta() {
    const [fruta, setFruta] = useState("")
    
    const [quantidade, setQuantidade] = useState("")
    
    const [arrFrutas, setArrFrutas] = useState([
        { id: 1, nome: "Maracuja", quantidade: 21 },
        { id: 2, nome: "Maçã", quantidade: 21 }
    ])

    function cadastrar(e) {
        e.preventDefault()
        setArrFrutas([...arrFrutas, { id: Date.now(), nome: fruta, quantidade: quantidade }])
    }

    return (

        <section className="sessao-cadastro">

            <h2>Cadastro</h2>

            <form action="" onSubmit={cadastrar}>

                <fieldset className="cadastro">

                    <label htmlFor="fruta" className="cadastro__rotulo">
                        Digite o nome da fruta
                    </label>

                </fieldset>

                <input
                    type="text"
                    id="fruta"
                    value={fruta}
                    placeholder="ex: limão"
                    className="cadastro__entrada"
                    onChange={(e) => { setFruta(e.target.value) }}
                />

                <input
                    type="text"
                    id="quantidade"
                    value={quantidade}
                    placeholder="ex: 2"
                    className="cadastro__entrada"
                    onChange={(e) => { setQuantidade(e.target.value) }}
                />

                <button type="submit" className="cadastro__btncadastrar">Cadastrar</button>

            </form>

            <span>{fruta}</span>

            <div className="resultados">
                <ul>
                    {
                        arrFrutas.map((f) => {
                            return (
                                <li key={f.id}>
                                    Fruta: <strong> {f.nome}</strong>
                                    <br />
                                    Quantidade: <strong> {f.quantidade}</strong>
                                </li>
                            )
                        })
                    }

                </ul>

            </div>
        </section>
    )
}