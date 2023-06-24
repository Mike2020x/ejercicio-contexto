import { useVoting } from '../../store/';
import "./TotalVotos.css"
const TotalVotos = () => {
    const { state } = useVoting();
    const { totalVotos } = state;

    return (
        <div>
            <h2>Total de Votos</h2>
            <p>{totalVotos}</p>
        </div>
    );
};

export default TotalVotos;
