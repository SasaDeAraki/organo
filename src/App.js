import { useState } from 'react';
import Banner from './components/Banner';
import Formulario from './components/Formulario';
import Mesa from './components/Mesa';
import Rodape from './components/Rodape';

function App() {

    const cargos = [
        '--',
        'Mestre',
        'Player'
    ]

    const mesas = [
        {
            nome: 'Mandleton',
            corPrimaria: '#ffeaae',
            corSecundaria: '#ccb266'
        },
        {
            nome: 'Hunter ao Cubo',
            corPrimaria: '#c486ff',
            corSecundaria: '#7c3aba'
        },
        {
            nome: 'O Capítulo Vermelho',
            corPrimaria: '#ff9189',
            corSecundaria: '#d1544b'
        },
        {
            nome: 'Conhecimento Infinito',
            corPrimaria: '#bedcb1',
            corSecundaria: '#619f47'
        },
    ]

    const [colaboradores, setColaboradores] = useState([])

    const aoNovoColaboradorAdicionado = (colaborador) => {
        setColaboradores([...colaboradores, colaborador])
    }

    return (
        <div className='App'>
            <Banner />
            <Formulario mesas={mesas.map(mesa => mesa.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)} />
            {mesas.map(mesa => <Mesa
                key={mesa.nome}
                nome={mesa.nome}
                corPrimaria={mesa.corPrimaria}
                corSecundaria={mesa.corSecundaria}
                colaboradores={colaboradores.filter(colaborador => colaborador.mesa === mesa.nome)}
            />)}
            <Rodape />
        </div>
    );
}

export default App;
