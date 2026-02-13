import './estilo.css'

const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE']

function OpcoesHeader() {
    return (
        <ul className='Opcoes'>
            {textoOpcoes.map((texto) => (
                <li className='opcao'><p>{texto}</p></li>
            ))}
        </ul>
    )
}

export default OpcoesHeader