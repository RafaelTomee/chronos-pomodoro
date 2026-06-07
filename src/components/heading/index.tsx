import { Logo } from '../logo';
import styles from './styles.module.css';
import { HouseIcon, History ,Settings, Sun} from 'lucide-react';

// type HeadingProps = {
//   children: React.ReactNode;
// };

export function Heading() {
  return (
    <div className={styles.container}>
      <Logo />
      

      
      <div className={styles.menu}>
        <div className={styles.Button}>
          <HouseIcon className={styles.iconButton} />
        </div>
        <div className={styles.Button}>
          <History className={styles.iconButton} />
        </div>
        <div className={styles.Button}>
          <Settings className={styles.iconButton} />
        </div>
        <div className={styles.Button}>
          <Sun className={styles.iconButton} />
        </div>
      </div>
    </div>
  );
}
