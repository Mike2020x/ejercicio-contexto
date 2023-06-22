import { useVotacionContext } from '../../store';
import "./TotalVotos.css"
export default function TotalVotos() {
    const { state } = useVotacionContext();
    const { votos } = state;

    return (
        <div className='total-votos'>
            <h2>Total de Votos</h2>
            <p>{votos.length}</p>
        </div>
    );
}


