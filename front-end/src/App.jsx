import { BrowserRouter, Route, Routes } from "react-router-dom";
import Paginainicial from "./pages/Paginainicial";
import './App.css'


function App() {

  return (
    <div className='container-app'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Paginainicial />} />
          <Route path="*" element={<h1>Pagína não encontrada</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
