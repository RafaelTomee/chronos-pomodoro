import styles from './Home.module.css';
import { CirclePlay } from 'lucide-react';

type HomeProps = {
  minutos: number;
};

export function Home({ minutos }: HomeProps) {
  return (
    <div className={styles.home}>
      <p className={styles.Timer}>00:00</p>
      <div className={styles.tasks}>
        <p>task:</p>
        <input
          className={styles.taskInput}
          type='text'
          placeholder='Ex: estudar para a prova'
        />
        <p>
          Neste ciclo <b>foque</b> por {minutos} <b>min.</b>
        </p>
      </div>
      <button className={styles.playButton}>
        <CirclePlay className={styles.playButtonIcon} />
      </button>
    </div>
  );
}
