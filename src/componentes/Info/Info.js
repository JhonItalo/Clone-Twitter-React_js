//css
import styles from './Info.module.scss'
import { useRef } from "react";
import Acontecimentos from '../Acontecimentos/Acontecimentos.js';
import Mensagens from '../Mensagens/Mensagens'

const Info = () => {
    const inputElement = useRef(null);

    const BtnFocus = () => {
        if (inputElement.current) {
            inputElement.current.focus();
        }
    }

    return (
        <div className={styles.info}>
            <div className={styles.info__busca} onClick={BtnFocus} >
                <i className="fas fa-search"></i>
                <input className={styles.info__busca__input} type="search" placeholder='Buscar no Twitter' ref={inputElement} />
            </div>
            <Acontecimentos />
            <Mensagens />
        </div>

    )
}

export default Info;