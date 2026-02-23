import Header from './componentes/Header';
import Pesquisa from './componentes/Pesquisa';
import UltimosLancamentos from './componentes/UlrtimosLancamentos';
import styled from 'styled-components';

const AppContiner = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg, #002F52 35%, #326589);
`
function App() {
  return (
    <AppContiner>
      <Header />
      <Pesquisa />
      <UltimosLancamentos />
    </AppContiner>
  );
}

export default App;