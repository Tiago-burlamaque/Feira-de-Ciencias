import { BrowserRouter, Route, Routes } from "react-router-dom";
import Paginainicial from "./pages/Paginainicial";
import './App.css'
import ConsumoAgua from "./pages/ConsumoAgua";
import ConsumoEnergia from "./pages/ConsumoEnergia";
import DicasReciclagem from "./pages/DicasReciclagem";
import Quiz from "./pages/Quiz";
  


function App() {

  return (
    <div className='container-app'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Paginainicial />} />
          <Route path="/consumodeagua" element={<ConsumoAgua />} />
          <Route path="/consumodeenergia" element={<ConsumoEnergia />} />
          <Route path="/dicasdereciclagem" element={<DicasReciclagem />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="*" element={<h1>Pagína não encontrada</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
