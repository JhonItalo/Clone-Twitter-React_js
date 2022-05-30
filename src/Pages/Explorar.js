
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

            </div >
        </>

    )
}

export default Explorar;