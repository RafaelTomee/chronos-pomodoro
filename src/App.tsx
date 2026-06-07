import './styles/theme.css';
import './styles/global.css';

import { Heading } from './components/heading/Heading';
import { Home } from './components/home/Home';
import { Footer } from './components/footer/Footer';
import { Setting } from './components/setting/Setting';

export function App() {
  return (
    <>
      <Heading>Chronos</Heading>
      <Home minutos={25} />
      <Setting />
      <Footer/>
    </>
  );
}
