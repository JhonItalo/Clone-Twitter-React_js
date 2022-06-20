//react router
import { BrowserRouter, Routes, Route } from "react-router-dom";
//hook
import { useState } from "react";
//componentes
import MenuLateral from '../componentes/MenuLateral/MenuLateral';
//pages
import Home from '../Pages/Home';
import Explorar from '../Pages/Explorar'
import Notificacoes from '../Pages/Notificacoes'
import Mensagens from "../Pages/Mensagens";
import ItensSalvos from '../Pages/ItensSalvos'
import Perfil from '../Pages/Perfil'
import Mais from '../Pages/Mais'
import Listas from '../Pages/Listas'

const Rotas = () => {

    const [rotaAtual, setRotaAtual] = useState('Home');
    return (
        <BrowserRouter>
            <MenuLateral page={rotaAtual} />
            <Routes>
                <Route path="/Clone-Twitter-React_js" element={<Home pageAtual={setRotaAtual} />} />
                <Route path="/Clone-Twitter-React_js/explorar" element={<Explorar pageAtual={setRotaAtual} />} />
                <Route path="/Clone-Twitter-React_js/notificacoes" element={<Notificacoes pageAtual={setRotaAtual} />} />
                <Route path="/Clone-Twitter-React_js/mensagens" element={<Mensagens pageAtual={setRotaAtual} />} />
                <Route path="/Clone-Twitter-React_js/itenssalvos" element={<ItensSalvos pageAtual={setRotaAtual} />} />
                <Route path="/Clone-Twitter-React_js/lista" element={<Listas pageAtual={setRotaAtual} />} />
                <Route path="/Clone-Twitter-React_js/perfil" element={<Perfil pageAtual={setRotaAtual} />} />
                <Route path="/Clone-Twitter-React_js/mais" element={<Mais pageAtual={setRotaAtual} />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Rotas;
