import './Mesa.css'
import Card from '../Card'

const Mesa = (props) => {

    const css = { backgroundColor: props.corPrimaria } 

    return (
        (props.colaboradores.length > 0) ? <section className='mesa' style={css}>
            <h3 style={{ borderColor: props.corSecundaria }}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map(card => <Card key={card.nome} corDeFundo={props.corSecundaria} nome={card.nome} cargo={card.cargo} imagem={card.imagem}/>)}
            </div>
        </section>
        : ''
    )
}

export default Mesa