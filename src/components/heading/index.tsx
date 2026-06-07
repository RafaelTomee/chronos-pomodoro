import { Logo } from '../logo';
import { Menu } from '../menu';
import styles from './styles.module.css';

// type HeadingProps = {
//   children: React.ReactNode;
// };

export function Heading() {
  return (
    <div className={styles.container}>
      <Logo />
      <Menu />
    </div>
  );
}
