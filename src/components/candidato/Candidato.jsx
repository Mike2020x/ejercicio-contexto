import { useVoting } from '../../store/';

const Candidato = ({ nombre, candidatoId }) => {
    const { dispatch } = useVoting();

    const handleVoteClick = () => {
        dispatch({ type: 'INCREMENT_VOTE', payload: { candidateId: candidatoId } });
    };

    return (
        <div>
            <h2>{nombre}</h2>
            <button onClick={handleVoteClick}>Votar</button>
        </div>
    );
};

export default Candidato;
