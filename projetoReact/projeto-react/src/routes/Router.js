import React from "react";
import {  Route, Routes } from "react-router-dom";
import App from "../App";
import Sobre from "../pages/Sobre/Sobre";

const Router = () => {
    return (
        <Routes>
            <Route exaact path="/" element={<App />} />
            <Route path="/sobre" element={<Sobre />} />
        </Routes >
    )
}
export default Router