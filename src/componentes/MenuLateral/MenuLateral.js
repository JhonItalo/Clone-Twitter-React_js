//css
import styles from './MenuLateral.module.scss'
//data
import usuario from '../User'
//hook
import { useState, useEffect } from "react";
//router dom
import { Link } from 'react-router-dom';


const MenuLateral = ({ page }) => {

    const [user, setUser] = useState(usuario);
    const [estagio, setEstagio] = useState(page)

    useEffect(() => {
        setEstagio(page)
    }, [page]);
    //Variaveis para o controle de adição de bold no titulo da pagina atual
    let Home1, Explorar1, Notificacoes1, Mensagens1, ItensSalvos1, Lista1, Perfil1, Mais1 = false;
    //varificando a page 
    if (estagio === 'Home') {
        Home1 = true;
    }
    if (estagio === 'explorar') {
        Explorar1 = true;
    }
    if (estagio === 'notificacoes') {
        Notificacoes1 = true;
    }
    if (estagio === 'mensagens') {
        Mensagens1 = true;
    }
    if (estagio === 'itensSalvos') {
        ItensSalvos1 = true;
    }
    if (estagio === 'lista') {
        Lista1 = true;
    }
    if (estagio === 'perfil') {
        Perfil1 = true;
    }
    if (estagio === 'mais') {
        Mais1 = true;
    }

    return (
        <header className={styles.sidebar}>
            <div className={styles.centralize__sidebar}>
                <Link to='/' className={styles.logo}>
                    <i className={"fa-brands fa-twitter logo"}></i>
                </Link>

                <ul className={styles.navigation}>
                    <li >
                        <Link to='/' className={[styles.navigation__item, (Home1 ? styles.home : [])].join(' ')} > <i className="fa-solid fa-house"></i>
                            <p>Página Inicial</p></Link>
                    </li>

                    <li >
                        <Link to='/explorar' className={[styles.navigation__item, (Explorar1 ? styles.explorar : [])].join(' ')}>
                            <i className="fa-solid fa-hashtag"></i>
                            <p>Explorar</p>
                        </Link>
                    </li>

                    <li >
                        <Link to='/notificacoes' className={[styles.navigation__item, (Notificacoes1 ? styles.notificacoes : [])].join(' ')}>
                            <i className="fa-solid fa-bell"></i>
                            <p>Notificações</p>
                        </Link>
                    </li>

                    <li >
                        <Link to='/mensagens' className={[styles.navigation__item, (Mensagens1 ? styles.mensagens : [])].join(' ')}  >
                            <i className="fa-solid fa-envelope"></i>
                            <p>Mensagens</p>
                        </Link>
                    </li>

                    <li >
                        <Link to='/itenssalvos' className={[styles.navigation__item, (ItensSalvos1 ? styles.itensSalvos : []), styles.navigation__item__remove].join(' ')}  >
                            <i className="fa-solid fa-bookmark"></i>
                            <p>Itens salvos</p>
                        </Link>
                    </li>

                    <li >
                        <Link to='/lista' className={[styles.navigation__item, (Lista1 ? styles.lista : []), styles.navigation__item__remove].join(' ')}>
                            <i className="fa-solid fa-list"></i>
                            <p>Listas</p>
                        </Link>
                    </li>

                    <li >
                        <Link to='/perfil' className={[styles.navigation__item, (Perfil1 ? styles.perfil : [])].join(' ')}>
                            <i className="fa-solid fa-user"></i><p>Perfil</p>
                        </Link>
                    </li>

                    <li >
                        <Link to='/mais' className={[styles.navigation__item, (Mais1 ? styles.mais : [])].join(' ')}>
                            <i className="fa-solid fa-circle-chevron-down"></i><p>Mais</p>
                        </Link>
                    </li>
                </ul>

                <button className={styles.centralize__item__btn}>Twettar</button>

                <div className={styles.centralize__item__user}>
                    <img style={{ width: '40px', height: '40px' }} src={user.img} alt="usuario" />
                    <div>
                        <p style={{ fontWeight: 'bold' }}> <b>{user.nome}</b> </p>
                        <p>{user.user}</p>
                    </div>
                </div>

            </div>
        </header >
    );

}

export default MenuLateral;
