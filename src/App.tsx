import './styles/theme.css';
import './styles/global.css';

import { Heading } from './components/heading/Heading';
import { Home } from './components/Home';

export function App() {
  return (
    <>
      <Heading>Chronos</Heading>
      <Home minutos={25} />
    </>
  );
}
