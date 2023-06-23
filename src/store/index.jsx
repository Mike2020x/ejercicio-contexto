import { createContext, useReducer, useContext } from 'react';
const VotacionContext = createContext();

const initialState = {
    totalVotos: [],
    candidates: [
        { id: 1, name: "sally", votes: 0 },
        { id: 2, name: "molly", votes: 0 },
        { id: 3, name: "lucy", votes: 0 },
        { id: 4, name: "Lucas", votes: 0 }
    ],
    showResultType: "total", //--- percentaje
}
const reducer = (state, action) => {
    switch (action.type) {

    }
    return state
};
// eslint-disable-next-line react/prop-types
export const VotacionProvider = ({ children }) => {
    return (
        <VotacionContext.Provider value={store}>
            {children}
        </VotacionContext.Provider>
    );
};

export const useVoting = () => {
    const store = useContext(VotacionContext)

    if (!VotacionContext) {

    }
}

