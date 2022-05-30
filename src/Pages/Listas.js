import { useEffect } from "react";

const Listas = ({ pageAtual }) => {

    useEffect(() => {
        pageAtual('lista');
    }, []);

    return (
        <>
            <div style={{
                display: 'flex', width: '100vw', height: '100vh', justifyContent: 'center', alignItems: 'center', backgroundColor: "lwhite", color: "black"
            }} >
                <i style={{ fontSize: '100px', color: '#00acee' }} class="fa-brands fa-twitter"></i>
            </div >
        </>

    )
}

export default Listas;