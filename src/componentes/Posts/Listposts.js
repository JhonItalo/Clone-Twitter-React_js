//componentes
import styles from './Listposts.module.scss';
import { useState, useEffect } from "react";

const ListPost = ({ feed }) => {
    const [posteres, setPosteres] = useState([...feed].reverse())

    useEffect(() => {
        setPosteres([...feed].reverse());
    }, [feed]);

    return (
        posteres.map((item) => (
            <div key={item.id} className={styles.postTwitter}>
                <div className={styles.flex__img}>
                    <img src={item.img} alt="Usúario" title='usúario' width='48px' height='48px' />
                </div>

                <div className={styles.flex__conteudo}>
                    <div className={styles.flex__conteudo__user}>
                        <p style={{ fontWeight: 'bold' }}>{item.nome}</p>
                        <p style={{ color: '#383837' }}>{item.user}</p>
                    </div>
                    <div>
                        <p>{item.txt}</p>
                    </div>
                    <div className={styles.flex__conteudo__icons}>
                        <i class="fa-solid fa-comments"></i>
                        <i class="fa-solid fa-retweet"></i>
                        <i class="fa-solid fa-heart"></i>
                        <i class="fa-solid fa-share-from-square"></i>
                    </div>
                </div>
            </div>
        )));

}

export default ListPost;