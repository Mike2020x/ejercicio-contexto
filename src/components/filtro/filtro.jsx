import { useVotacionContext } from '../../store';
import "./Filtro.css"

export default function Filtro() {
    const { state, cambiarFiltro } = useVotacionContext();
    const { filtro } = state;

    const handleMostrarPorcentaje = (event) => {
        cambiarFiltro({ ...filtro, mostrarPorcentaje: event.target.checked });
    };

    const handleSeleccionarCandidato = (event) => {
        const candidato = event.target.value;
        let candidatosSeleccionados = filtro.candidatosSeleccionados;

        if (event.target.checked) {
            candidatosSeleccionados = [...candidatosSeleccionados, candidato];
        } else {
            candidatosSeleccionados = candidatosSeleccionados.filter((c) => c !== candidato);
        }

        cambiarFiltro({ ...filtro, candidatosSeleccionados });
    };

    return (
        <div className='filtro'>
            <h2>Filtro</h2>
            <div>
                <label>
                    Mostrar porcentaje:
                    <input
                        type="checkbox"
                        checked={filtro.mostrarPorcentaje}
                        onChange={handleMostrarPorcentaje}
                    />
                </label>
            </div>
            <div>
                <h4>Seleccionar candidatos:</h4>
                <label>
                    Candidato 1:
                    <input
                        type="checkbox"
                        value="Candidato 1"
                        checked={filtro.candidatosSeleccionados.includes('Candidato 1')}
                        onChange={handleSeleccionarCandidato}
                    />
                </label>
                <label>
                    Candidato 2:
                    <input
                        type="checkbox"
                        value="Candidato 2"
                        checked={filtro.candidatosSeleccionados.includes('Candidato 2')}
                        onChange={handleSeleccionarCandidato}
                    />
                </label>
                <label>
                    Candidato 3:
                    <input
                        type="checkbox"
                        value="Candidato 3"
                        checked={filtro.candidatosSeleccionados.includes('Candidato 3')}
                        onChange={handleSeleccionarCandidato}
                    />
                </label>
                <label>
                    Candidato 4:
                    <input
                        type="checkbox"
                        value="Candidato 4"
                        checked={filtro.candidatosSeleccionados.includes('Candidato 4')}
                        onChange={handleSeleccionarCandidato}
                    />
                </label>
            </div>
        </div>
    );
}