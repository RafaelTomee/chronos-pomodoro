import styles from './styles.module.css';
import { HouseIcon, HistoryIcon, SettingsIcon, SunIcon } from 'lucide-react';

export function Menu() {
  return (
    <nav className={styles.menu}>
      <a className={styles.menuLink} href="home">
        <HouseIcon className={styles.iconButton} />
      </a>
      <a className={styles.menuLink} href="history">
        <HistoryIcon className={styles.iconButton} />
      </a>
      <a className={styles.menuLink} href="setting">
        <SettingsIcon className={styles.iconButton} />
      </a>
      <div className={styles.menuLink}>
        <SunIcon className={styles.iconButton} />
      </div>
    </nav>
  );
}
