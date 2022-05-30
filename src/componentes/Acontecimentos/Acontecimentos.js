import styles from './Acontecimentos.module.scss'
import { ListAcont } from '../User';
import { useState } from "react";


const Acontecimentos = () => {
    const [ListAcontecimentos, setListAcontecimentos] = useState(ListAcont);
    return (
        <div className={styles.acontecimentos}>
            <p className={styles.titulo}>O que está acontecendo</p>
            <ul>
                {ListAcontecimentos.map((item) => (
                    <li key={item.id} className={styles.listAcontecimentos}>
                        <p>{item.tema}</p>
                        <p className={styles.manchete}>{item.manchete}</p>
                        <p className={styles.tweets}>{item.tweets}</p></li>
                ))}
            </ul>

            <a href="#">Mostrar mais</a>
        </div>

    )
}

export default Acontecimentos;