import styles from './Heading.module.css';
import { HouseIcon, TimerIcon, History ,Settings, Sun} from 'lucide-react';

type HeadingProps = {
  children: React.ReactNode;
};

export function Heading({ children }: HeadingProps) {
  return (
    <div>
      <div className={styles.heading}>
        <TimerIcon className={styles.icon} />
        <h1>{children}</h1>
      </div>

      
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
