//css
import styles from './Tweetar.module.scss'
import { useRef } from "react";
import { useState } from "react";
import usuario from '../User'

const Tweetar = ({ addPost, posts }) => {
    const inputElement = useRef(null);

    const [user, setUser] = useState(usuario);
    const [mensage, setMensage] = useState('');

    const BtnFocus = () => {
        if (inputElement.current) {
            inputElement.current.focus();
        }
    }
    const BtnTweetar = () => {
        const newPost = {
            id: (Math.random(10 ** 10)),
            user: user.user,
            nome: user.nome,
            img: user.img,
            txt: mensage
        }
        addPost([...posts, newPost]);
        setMensage('');
    }

    /* const AutoTextArea = (e) => {
         if (e.target.value <= 46) {
             inputElement.current.rows = '1';
         }
         if ((e.target.value > 46) || (inputElement.current.value.length < 92)) {
             inputElement.current.rows = '2';
         }
         if ((e.target.value > 92)) {
             inputElement.current.rows = '3';
         }
         if (e.target.value > 138) {
             inputElement.current.rows = '4';
         }
 
     }
 */
    const HandleMensage = (e) => {
        setMensage(e.target.value);
    }


    return (
        <div className={styles.tweetar} onClick={BtnFocus}>
            <div className={styles.tweetar__input}>
                <img width="48px" height='48px' src={user.img} alt="usuario" title='usuario' />
                <textarea className={styles.tweetar_input_text} name="tweet-txt" id="tweet-txt" cols="1" rows="1" placeholder='O que está acontecendo?' ref={inputElement} maxLength="280" onChange={HandleMensage} value={mensage} style={{ overflow: 'auto', outline: 'none', userSelect: 'text', whitePpace: 'pre-wrap', overflowWrap: 'break-word' }} ></textarea>
            </div>

            <div className={styles.icons}>
                <div className={styles.icons__item}>
                    <i className="fa-solid fa-image"></i>
                    <i className="fa-solid fa-gift"></i>
                    <i className="fa-solid fa-square-poll-horizontal"></i>
                    <i className="fa-solid fa-face-smile"></i>
                    <i className="fa-solid fa-calendar-check"></i>
                    <i className="fa-solid fa-location-dot"></i>
                </div>
                <button onClick={BtnTweetar} className={styles.icons__btn}>Twettar</button>
            </div>

        </div>

    )
}

export default Tweetar;