import {  Routes, Route } from "react-router-dom";
import { Proyecto_1_Page, Proyecto_2_page, Sidebar1 } from "../index";
export const MyRoutes = () => {
  return (
   
      <Routes>
        <Route path="/" element={<Proyecto_1_Page />} />
        <Route path="/proyecto2" element={<Proyecto_2_page />} />
      </Routes>
   
  );
};
