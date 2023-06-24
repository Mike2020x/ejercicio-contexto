import Candidato from "./components/candidato/Candidato";
import TotalVotos from './components/totalVotos/TotalVotos';
import VotosIndividuales from './components/votosIndividuales/VotosIndividuales';
import Filtro from './components/filtro/filtro';
import { VotacionProvider } from './store/';
import "./App.css"

const App = () => {
  return (
    <VotacionProvider>
      <div className="container">
        <div className="candidatos">
          <Candidato className="candidatos" />
        </div>
        <div className="layout">
          <div className="filtro">
            <Filtro />
          </div>
          <div />
          <div className="votos">
            <div className="total-votos">
              <TotalVotos />
            </div>
            <div className="votos-individuales">
              <VotosIndividuales />
            </div>
          </div>
        </div>
      </div>
    </VotacionProvider>
  );
};

export default App;
