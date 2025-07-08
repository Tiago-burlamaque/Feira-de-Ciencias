import './ConsumoAgua.css'
import Navbar from '../components/Navbar'
import BarChart from '../components/BarChart.jsx'

function ConsumoAgua() {
  return (
    <div className='container-navbar'>
        <Navbar />
        <div className="baixo">
        <h1>Média de consumo da Água</h1>
        <BarChart />
        </div>
    </div>
  )
}

export default ConsumoAgua