//componentes
import MainHome from '../componentes/MainHome/MainHome.js';
import Info from '../componentes/Info/Info'
//hook
import { useEffect } from "react";

const Home = ({ pageAtual }) => {
    useEffect(() => {
        pageAtual('Home');
    }, []);

    return (
        <>
            <Info />
            <MainHome />
        </>
    );

}

export default Home;