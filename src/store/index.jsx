import { createContext, useReducer, useContext } from 'react';
import reducer from './reducer';

const VotacionContext = createContext();

// eslint-disable-next-line react/prop-types
export const VotacionProvider = ({ children }) => {
    const initialState = {
        votos: [],
        filtro: {
            mostrarPorcentaje: false,
            candidatosSeleccionados: []
        }
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    const agregarVoto = (candidato) => {
        const nuevoVoto = { candidato, id: state.votos.length + 1 };
        dispatch({ type: 'AGREGAR_VOTO', payload: nuevoVoto });
    };

    const cambiarFiltro = (nuevoFiltro) => {
        dispatch({ type: 'CAMBIAR_FILTRO', payload: nuevoFiltro });
    };

    const contextValue = {
        state,
        agregarVoto,
        cambiarFiltro
    };

    return (
        <VotacionContext.Provider value={contextValue}>
            {children}
        </VotacionContext.Provider>
    );
};

export const useVotacionContext = () => useContext(VotacionContext);
