import { useVotacionContext } from '../../store';
import "./VotosIndividuales.css"
export default function VotosIndividuales() {
    const { state } = useVotacionContext();
    const { votos, filtro } = state;

    const mostrarPorcentaje = filtro.mostrarPorcentaje;
    const candidatosSeleccionados = filtro.candidatosSeleccionados;

    const candidatosVotos = votos.reduce((acc, voto) => {
        if (candidatosSeleccionados.includes(voto.candidato)) {
            acc[voto.candidato] = (acc[voto.candidato] || 0) + 1;
        }
        return acc;
    }, {});

    const calcularPorcentaje = (candidatoVotos, votos) => {
        const totalVotos = Object.values(candidatoVotos).reduce((sum, count) => sum + count, 0);
        const porcentaje = (votos / totalVotos) * 100;
        return isNaN(porcentaje) ? '0.00' : porcentaje.toFixed(2);
    };


    return (
        <div className='votos-individuales'>
            <h2>Votos Individuales</h2>
            {Object.entries(candidatosVotos).map(([candidato, votos]) => (
                <div key={candidato}>
                    <p>
                        {candidato}: {mostrarPorcentaje ? `${calcularPorcentaje(candidatosVotos, votos)}%` : votos}
                    </p>
                </div>
            ))}
        </div>
    );
}