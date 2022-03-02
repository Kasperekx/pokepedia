import React from "react";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";

import Login from "../views/Login";
import Pokedex from "../views/Pokedex";
import Pokemon from "../views/Pokemon";
import { token } from "../utils/AuthServices";

const Router = () => {
  return (
    <BrowserRouter >
      <Routes>
        <Route path="/pokepedia/login" element={<Login />} />
        <Route path="/pokepedia" element={token ? <Pokedex /> : <Login />} />
        <Route path="/pokepedia/pokemon/:id" element={<Pokemon />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
