import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Ajuda from "./ajuda";
import Interface from "./interface";

const MyRoutes = () => {
   return(
       <BrowserRouter>
           <Routes>
               <Route path="/" element={<Interface />} exact />
               <Route path="/ajuda" element={<Ajuda />} />
           </Routes>
       </BrowserRouter>
   )
}

export default MyRoutes;