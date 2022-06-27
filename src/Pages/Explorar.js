
import { useEffect } from "react";

const Explorar = ({ pageAtual }) => {

    useEffect(() => {
        pageAtual('explorar');
    });

    return (
        <>
            <div style={{
                display: 'flex', width: '100vw', height: '100vh', justifyContent: 'center', alignItems: 'center', backgroundColor: "white", color: "black"
            }} >
                <i style={{ fontSize: '100px', color: '#00acee' }} class="fa-brands fa-twitter"></i>
                <div style={{ display: "flex", position: 'fixed', top: "400px", margin: "auto", width: "40%" }}>
                    <p>As páginas seguintes não foram densenvolvidas, pois utilizam-se dos mesmos conceitos da página inicial. Você pode acompanhar meus novos projetos e desafios no meu Github.</p>
                </div>

            </div >
        </>

    )
}

export default Explorar;