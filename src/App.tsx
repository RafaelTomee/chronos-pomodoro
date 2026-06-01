import "./styles/theme.css";
import "./styles/global.css";

import { Heading } from "./components/Heading";

export function App() {
  return (
    <>
      <Heading attr={123} attr2="string">Olá mundo children</Heading>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo, harum. Voluptatibus atque mollitia quidem debitis quia nostrum culpa nulla eos sint excepturi doloribus pariatur, dicta perspiciatis, distinctio deserunt magni doloremque.</p>
    </>
  );
}
