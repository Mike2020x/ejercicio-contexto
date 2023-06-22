import { useVotacionContext } from '../../store';
import "./Candidato.css"
// eslint-disable-next-line react/prop-types
export default function Candidato({ nombre }) {
    const { agregarVoto } = useVotacionContext();

    const handleVoto = () => {
        agregarVoto(nombre);
    };

    return (
        <div className='candidato'>
            <h2>{nombre}</h2>
            <button onClick={handleVoto}>Votar</button>
        </div>
    );
}


