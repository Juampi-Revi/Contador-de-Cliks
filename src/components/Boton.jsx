import '../stylesheet/Boton.css';

function Boton ({ texto, esContadordeClic, onclick }) {
    return (
        <button className = { esContadordeClic ? 'boton-clic' : 'boton-reiniciar' } onClick= {onclick}>
            { texto }
        </button>
    )
}
export default Boton;