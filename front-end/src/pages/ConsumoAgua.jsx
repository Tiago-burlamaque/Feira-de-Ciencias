import './ConsumoAgua.css'
import Navbar from '../components/Navbar'
import './Paginainicial.css'
import Rodape from '../components/Rodape'

function ConsumoAgua() {
  return (
    <div className='container-consumo-agua'>
    {/* <div className='container-navbar'>
      <Navbar />
        </div>
        
        <div className="baixo">
        <h1>Média de consumo da Água</h1>
        <BarChart />
    </div> */}
      <Navbar />
    <div className="container">
      <div className="container-site">
      <p className='texto-agua'>O consumo de água por setor no Brasil é liderado pela agricultura, seguida pelo abastecimento urbano e pela indústria. A agricultura utiliza a maior parte da água, principalmente para irrigação. O abastecimento urbano, incluindo o uso residencial, também tem um consumo significativo. A indústria, embora tenha um consumo menor em comparação com a agricultura, ainda representa uma parcela considerável do uso total de água. 
Principais setores e seus consumos:
Agricultura:
O setor agrícola é o maior consumidor de água, com a irrigação sendo a principal atividade. A agricultura de sequeiro (não irrigada) também tem um impacto significativo no consumo. 
Abastecimento Urbano:
O abastecimento de água para consumo humano e atividades urbanas é o segundo maior consumidor de água no Brasil. 
Indústria:
A indústria, incluindo a transformação e outros setores, também tem um consumo considerável de água. 
Outros usos:
Uso animal: A criação de animais também demanda água para consumo e higiene.
Termelétricas: As usinas termelétricas utilizam água para resfriamento.
Mineração: O setor de mineração também tem um consumo significativo de água. 
Consumo per capita:
O consumo per capita de água pelas famílias brasileiras varia entre as regiões, com o Sudeste registrando o maior consumo e o Nordeste o menor. 
Considerações adicionais:
O consumo de água no Brasil pode ser influenciado por fatores como a disponibilidade hídrica, o clima e as práticas de uso da água em cada setor. 
É importante buscar o uso racional e eficiente da água em todos os setores para garantir a sustentabilidade do recurso. 
O reuso da água e o compartilhamento de informações sobre o uso da água são medidas importantes para a gestão sustentável dos recursos hídricos. 
</p>
      </div>
    </div>
    <Rodape />
      </div>    
  )
}

export default ConsumoAgua