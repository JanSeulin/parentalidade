import { Routes, Route } from 'react-router-dom';

import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';
import ApoioMedico from './routes/apoio-medico/apoio-medico.component';
import Recursos from './routes/recursos/recursos.component';
import Politicas from './routes/politica/politica.component';
import InformacoesUteis from './routes/informacoes-uteis/informacoes-uteis.component';

function App() {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="/apoio-medico" element={<ApoioMedico />} />
          <Route path="/recursos" element={<Recursos />} />
          <Route path="/politicas" element={<Politicas />} />
          <Route path="/informacoes-uteis" element={<InformacoesUteis />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
