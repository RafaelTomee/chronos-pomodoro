import { Trash2 } from 'lucide-react';
import style from './History.module.css';

export function History() {
  return (
    <div className={style.history}>
      <h3>
        History{' '}
        <div>
          <Trash2 />
        </div>
      </h3>
      <table>
        <thead>
            <tr>
              <td>Task</td>
              <td>Duração</td>
              <td>Date</td>
              <td>Status</td>
              <td>Tipo</td>
            </tr>
        </thead>
      </table>
    </div>
  );
}
