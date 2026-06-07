import './styles/theme.css';
import './styles/global.css';

import { Heading } from './components/heading/Heading';
import { Home } from './components/home/Home';
import { Footer } from './components/footer/Footer';
import { Setting } from './components/setting/Setting';
import { Erro } from './components/erro/Erro';
import { History } from './components/history/History';

export function App() {
  return (
    <>
      <Heading>Chronos</Heading>
      <Home minutos={25} />
      <Setting />
      <Erro />
      <History />
      <Footer/>
    </>
  );
}
