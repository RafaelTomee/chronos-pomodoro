import { Logo } from './components/logo';
import { Menu } from './components/menu';

import './styles/theme.css';
import './styles/global.css';
import { Container } from './components/container';

export function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>
      <Container>
        <Menu />
      </Container>
    </>
  );
}
