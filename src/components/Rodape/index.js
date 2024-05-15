import './Rodape.css'

const Rodape = () => {
    return (
        <footer className='footer'>
            <section>
                <ul>
                    <li>
                        <a href='facebook.com' target='_blank'> 
                            <img src='img/fb.png' alt=''></img>
                        </a>
                    </li>
                    <li>
                        <a href='twitter.com' target='_blank'> 
                            <img src='img/tw.png' alt=''></img>
                        </a>
                    </li>
                    <li>
                        <a href='instagram.com' target='_blank'> 
                            <img src='img/ig.png' alt=''></img>
                        </a>
                    </li>
                </ul>
            </section>
            <section>
                <img src='/img/logo.png'></img>
            </section>
            <section>
                <p>Desenvolvido por Alura.</p>
            </section>
        </footer>
    )
}

export default Rodape