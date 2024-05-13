import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = () => {

    const cargos = [
        'Mestre',
        'Player'
    ]

    const mesas = [
        'Mandleton',
        'Hunter ao Cubo',
        'O Capítulo Vermelho',
        'Conhecimento Infinito',
        'Personagens'
    ]

    const aoSalvar = (evento) => {
        evento.preventDefault()
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card dos membros do grupo</h2>
                <CampoTexto obrigatorio={true} label='Nome' placeholder='Digite seu nome' />
                <ListaSuspensa label='Cargo' itens={cargos}/>
                <CampoTexto label='Imagem' placeholder='Digite o endereço da imagem' />
                <ListaSuspensa obrigatorio={true} label='Categoria' itens={mesas} />
                <Botao>
                    Criar card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario