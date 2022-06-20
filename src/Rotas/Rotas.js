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
                <Route path="/Clone-Twitter-React_js" element={<Home />}>
                    <Route index element={<Home pageAtual={setRotaAtual} />} />
                    <Route path="/explorar" element={<Explorar pageAtual={setRotaAtual} />} />
                    <Route path="notificacoes" element={<Notificacoes pageAtual={setRotaAtual} />} />
                    <Route path="/mensagens" element={<Mensagens pageAtual={setRotaAtual} />} />
                    <Route path="/itenssalvos" element={<ItensSalvos pageAtual={setRotaAtual} />} />
                    <Route path="/lista" element={<Listas pageAtual={setRotaAtual} />} />
                    <Route path="/perfil" element={<Perfil pageAtual={setRotaAtual} />} />
                    <Route path="/mais" element={<Mais pageAtual={setRotaAtual} />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Rotas;
