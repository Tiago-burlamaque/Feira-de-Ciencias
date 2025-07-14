import React from 'react'
import './Rodape.css'

function Rodape() {
  return (
    <div className='container-rodape'>
      <p className='copyright'>© 2025 Todos os direitos reservados.</p>
      <div className="container-integrantes">
        <p className="texto-rodape">
          <h1 className="titulo">Integrantes</h1>
          
        <ul className="nomes">
            <li>
                Tiago Burlamaque
            </li>
            <li>
                Gabriel dos Santos
            </li>
            <li>
                Arthur Vilela
            </li>
        </ul>
        </p>
    
      <div className="suas-acoes">
      <p className="texto-rodape">
        <h1 className='titulo'>Funções</h1>
        
        <ul className="acoes">
          <li>
              Programação Full-stack
          </li>
          <li>
            Idéias
          </li>
          <li>
            apresentação
          </li>
        </ul>
      </p>
        </div>
      </div>
    </div>
  )
}

export default Rodape
