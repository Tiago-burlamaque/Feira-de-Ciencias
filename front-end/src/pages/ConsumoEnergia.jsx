import './Paginainicial.css'
import Navbar from "../components/Navbar"
import './ConsumoEnergia.css'
import Rodape from '../components/Rodape'

function ConsumoEnergia() {
  return (
    <div className='container-consumo-energia'>
      <Navbar />
        <div className="titulo">
        <h1>O que podemos fazer para poupar o <span>consumo</span> de <span>energia</span>?</h1>
        </div>
      <div className="resto-site">
        <p className="texto">
          💡 No uso de iluminação
          <ul className='colunas'>
            <li>
              Aproveite a luz natural: abra cortinas e janelas durante o dia.
            </li>
            <li>
              Use lâmpadas LED: elas consomem até 80% menos energia e duram mais.
            </li>
            <li>
              Apague as luzes ao sair de um cômodo.
            </li>
          </ul>
        </p>
        <p className='texto'>
          ⚙️ Com eletrodomésticos
          <ul className='colunas'>
            <li>
              Desligue da tomada aparelhos que não estão em uso (como micro-ondas, TV, carregadores).
            </li>
            <li>
              Evite abrir a geladeira muitas vezes ou por muito tempo.
            </li>
            <li>
              Use o ar-condicionado e o ventilador com moderação – mantenha o ambiente fechado e use na temperatura ideal.
            </li>
          </ul>
        </p>
        <p className="texto">
          🌐 No uso de eletrônicos
          <ul className="colunas">
            <li>
                Use o modo econômico ou "modo descanso" em computadores e notebooks.
            </li>
            <li>
              Desligue o monitor quando estiver fora por longos períodos.
            </li>
          </ul>
        </p>
        <p className="texto">
          🧺 Na lavanderia
          <ul className="colunas">
            <li>
              Junte mais roupas para lavar de uma vez só.
            </li>
            <li>
              Evite usar o ferro de passar muitas vezes ao dia – passe todas as roupas de uma vez.
            </li>
          </ul>
        </p>
        <p className="texto">
          🔌 Com energia geral da casa
          <ul className="colunas">
            <li>
              Faça manutenção em aparelhos elétricos para evitar consumo excessivo.
            </li>
            <li>
              Invista em eletrodomésticos com selo Procel A, que são mais eficientes.
            </li>
          </ul>
        </p>
    </div>
    <Rodape />
    </div>

  )
}

export default ConsumoEnergia
