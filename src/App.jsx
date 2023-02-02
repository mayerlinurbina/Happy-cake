import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Contacto from "./pages/Contacto";
import Navbar from "./pages/Navbar";


const App = () => {

  return (
<>
    <Navbar/>      
    <Routes>
      <Route path="/contacto" element={<Contacto/>}/>
      <Route path="/" element={ <Home/>}/>   
    </Routes>
</>
  )

}

export default App