import React from "react";
import {Routes, Route} from "react-router-dom";
import Home from "./Pages/Home";
import Contato from "./Pages/Contato";
import Cadastro from "./Pages/Cadastro";
import Tabelas from "./Pages/Tabelas";

const Rotas = () => {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/listaUsuarios" element={<Tabelas />} />
      </Routes>
    </>
  );
};

export default Rotas;
