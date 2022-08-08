import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import Login from "./Componentes/login"
import Habitos from "./Componentes/habitos";
import Cadastro from "./Componentes/cadastro";
import Hoje from "./Componentes/hoje";
import Historico from "./Componentes/historico";

export default function App() {

    return (
    
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/habitos" element={<Habitos />} />
              <Route path="/hoje" element={<Hoje />} />
              <Route path="/historico" element={<Historico />} />              
            </Routes>
          </BrowserRouter>
        

    )

}

