import { useVoting } from '../../store/';

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
