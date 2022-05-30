//css
import styles from './Mensagens.module.scss'

const Mensagens = () => {

    return (
        <div className={styles.mensagens}>

            <p>Mensagens</p>
            <div className={styles.icons}>
                <a href="#"><i className="fa-solid fa-envelope"></i></a>
                <a href="#"><i className="fa-solid fa-angles-up"></i></a>
            </div>
        </div>
    )
}

export default Mensagens;