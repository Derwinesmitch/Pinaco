import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Clases from "./components/Clases";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Home />}></Route>
        <Route path="clases" element={<Clases />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
