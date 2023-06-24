import { useVoting } from '../../store/';
import "./Filtro.css"
const Filtro = () => {
    const { state, dispatch } = useVoting();
    const { showResultType } = state;

    const handleResultTypeChange = e => {
        const resultType = e.target.value;
        dispatch({ type: 'SET_RESULT_TYPE', payload: { resultType } });
    };

    return (
        <div className='filtro'>
            <h2>Filtro</h2>
            <div>
                <label>
                    <input
                        type="radio"
                        value="total"
                        checked={showResultType === 'total'}
                        onChange={handleResultTypeChange}
                    />
                    Resultado Total
                </label>
                <label>
                    <input
                        type="radio"
                        value="percentage"
                        checked={showResultType === 'percentage'}
                        onChange={handleResultTypeChange}
                    />
                    Resultado en Porcentaje
                </label>
            </div>
        </div>
    );
};

export default Filtro;
