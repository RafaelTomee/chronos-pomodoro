import { Save } from 'lucide-react';
import styles from './Setting.module.css';

export function Setting() {
    return (
        <div className={styles.setting}>
            <h3>Configurações</h3>
            <p>Configure os minutos para as etapas do Pomodoro.</p>
            <p>Foco (min):</p>
            <input type="number" defaultValue="25" />
            <p>Descanso curto (min):</p>
            <input type="number" defaultValue="5" />
            <p>Descanso longo (min):</p>
            <input type="number" defaultValue="15" />
            <div><button className={styles.settingButton}><Save /></button></div>
            
        </div>
    );
}
