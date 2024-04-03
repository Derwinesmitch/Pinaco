import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Clases from "./components/Clases";
import Cumpleanos from "./components/Cumpleanos";
import Eventos from "./components/Eventos";
import Club from "./components/Club";
import Kits from "./components/Kits";
import Colonia from "./components/Colonia";
import Moviles from "./components/Moviles";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Home />}></Route>
        <Route path="clases" element={<Clases />}></Route>
        <Route path="cumpleanos" element={<Cumpleanos />}></Route>
        <Route path="eventos" element={<Eventos />}></Route>
        <Route path="club" element={<Club />}></Route>
        <Route path="kits" element={<Kits />}></Route>
        <Route path="colonia" element={<Colonia />}></Route>
        <Route path="moviles" element={<Moviles />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
