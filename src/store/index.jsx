import { createContext, useReducer, useContext } from 'react';

const VotacionContext = createContext();

const initialState = {
    totalVotos: 0,
    candidates: [
        { id: 1, name: "Candidato 1", votes: 0, percentage: 0 },
        { id: 2, name: "Candidato 2", votes: 0, percentage: 0 },
        { id: 3, name: "Candidato 3", votes: 0, percentage: 0 },
        { id: 4, name: "Candidato 4", votes: 0, percentage: 0 }
    ],
    showResultType: 'total'
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT_VOTE':
            const { candidateId } = action.payload;
            const updatedCandidates = state.candidates.map(candidate => {
                if (candidate.id === candidateId) {
                    return {
                        ...candidate,
                        votes: candidate.votes + 1
                    };
                }
                return candidate;
            });
            const totalVotos = state.totalVotos + 1;
            const updatedCandidatesWithPercentage = updatedCandidates.map(candidate => {
                const percentage = (candidate.votes / totalVotos) * 100;
                return {
                    ...candidate,
                    percentage: isNaN(percentage) ? 0 : percentage.toFixed(2)
                };
            });
            return {
                ...state,
                candidates: updatedCandidatesWithPercentage,
                totalVotos
            };
        case 'SET_RESULT_TYPE':
            const { resultType } = action.payload;
            return {
                ...state,
                showResultType: resultType
            };
        default:
            return state;
    }
};

export const VotacionProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <VotacionContext.Provider value={{ state, dispatch }}>
            {children}
        </VotacionContext.Provider>
    );
};

export const useVoting = () => useContext(VotacionContext);
