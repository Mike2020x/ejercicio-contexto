import { useVoting } from '../../store/';
import "./VotosIndividuales.css"
const VotosIndividuales = () => {
    const { state } = useVoting();
    const { candidates, showResultType } = state;

    const renderVotes = () => {
        return candidates.map(candidate => (
            <p key={candidate.id}>
                {candidate.name}: {showResultType === 'total' ? candidate.votes : candidate.percentage} {showResultType === 'total' ? 'votos' : '%'}
            </p>
        ));
    };

    return (
        <div>
            <h2>Votos Individuales</h2>
            {renderVotes()}
        </div>
    );
};

export default VotosIndividuales;
