import { useVoting } from '../../store/';
import "./Candidato.css"
const Candidato = () => {
    const { state, dispatch } = useVoting();

    const { candidates } = state;

    const handleVoteClick = (candidateId) => {
        dispatch({ type: 'INCREMENT_VOTE', payload: { candidateId } });
    };

    return (
        <div className='candidato'>
            {candidates.map((candidate) => (
                <div key={candidate.id} className='candidato-item'>
                    <h2 className='candidato-nombre'>{candidate.name}</h2>
                    <button className='candidato-btn' onClick={() => handleVoteClick(candidate.id)}>Votar</button>
                </div>
            ))}
        </div>
    );
};

export default Candidato;
