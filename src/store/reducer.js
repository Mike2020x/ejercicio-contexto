import { AGREGAR_VOTO, CAMBIAR_FILTRO } from './types';

const reducer = (state, action) => {
  switch (action.type) {
    case AGREGAR_VOTO:
      return {
        ...state,
        votos: [...state.votos, action.payload]
      };
    case CAMBIAR_FILTRO:
      return {
        ...state,
        filtro: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
