import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = (props) => {

    const cargos = [
        '--',
        'Mestre',
        'Player'
    ]

    const mesas = [
        '--',
        'Mandleton',
        'Hunter ao Cubo',
        'O Capítulo Vermelho',
        'Conhecimento Infinito'
    ]

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [mesa, setMesa] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            mesa
        })
    }

    return (    
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card dos membros do grupo</h2>
                <CampoTexto
                    obrigatorio={true}
                    label='Nome'
                    placeholder='Digite seu nome'
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <ListaSuspensa
                    obrigatorio={true}
                    label='Cargo'
                    itens={cargos}
                    aoAlterado={valor => setCargo(valor)}
                />
                <CampoTexto
                    label='Imagem'
                    placeholder='Digite o endereço da imagem'
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa
                    obrigatorio={true}
                    label='Mesa'
                    itens={mesas}
                    aoAlterado={valor => setMesa(valor)}
                />
                <Botao>
                    Criar card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario