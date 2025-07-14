import Navbar from '../components/Navbar'
import Rodape from '../components/Rodape'


function DicasReciclagem() {
  return (
    <>
    <div className='container-consumo-energia'>
        <Navbar />
            <div className="titulo">
            <h1>♻️ Dicas de Reciclagem para o Dia a Dia</h1>
            </div>
        <div className="resto-site" > 
        <p className='texto'>
               <span>1. Separe corretamente os resíduos</span> 
            <ul className="colunas">
                <li>    
                    <span>Secos</span>: plástico, papel, vidro, metal.
                </li>
                <li>
                    <span>Orgânicos</span>: restos de alimentos, cascas, borra de café.
                </li>
                <li>
                    <span>Rejeitos</span>: lixo de banheiro, papel higiênico, fraldas.
                </li>
        </ul>
        </p>
        <p className="texto">
           <span> 2. Lave os recicláveis </span>
            <ul className="colunas">
                <li>
                    Enxágue potes de iogurte, latas e garrafas antes de descartar.
                </li>
                <li>
                    Isso evita mau cheiro e contaminação de outros recicláveis.
                </li>
            </ul>
        </p>
        <p className="texto">
            <span>3. Amontoe e compacte</span>
       
        <ul className="colunas">
            <li>
                Achate caixas e garrafas PET para ocupar menos espaço.
            </li>
        </ul>
         </p>
         <p className="texto">
            <span>4. Dê destino correto ao óleo de cozinha</span>
            <ul className="colunas">
                <li>
                    Nunca jogue na pia! Guarde em uma garrafa e leve a pontos de coleta.
                </li>
            </ul>
         </p>
         <p className="texto">
            <span>5. Reaproveite embalagens</span>
            <ul className="colunas">
                <li>
                    Use potes de vidro como organizadores ou vasos.
                </li>
                <li>
                    Caixas de papelão viram gavetas, brinquedos ou embalagens de presente.
                </li>
            </ul>
         </p>
         </div> 
         <div className="resto-site">
            <p className="texto">
                <span>6. Utilize ecopontos ou cooperativas</span>
                <ul className="colunas">
                    <li>
                        Leve pilhas, eletrônicos, lâmpadas e outros resíduos específicos a locais próprios.
                    </li>
                </ul>
            </p>
            <p className="texto">
                <span>7. Recicle roupas e calçados</span>
                <ul className="colunas">
                    <li>
                        Doe para ONGs, faça trocas ou use para criar novos objetos (ex: bolsas, panos).
                    </li>
                </ul>
            </p>
            <p className="texto">
                <span>8. Reduza o consumo</span>
                <ul className="colunas">
                    <li>
                        Antes de comprar algo, pergunte: “Eu realmente preciso disso?”.
                    </li>
                    <li>
                        Menos consumo = menos lixo.
                    </li>
                </ul>
            </p>
            <p className="texto">
                <span>9. Crie uma composteira</span>
                <ul className="colunas">
                    <li>
                        Ideal para apartamentos e casas. Transforma resíduos orgânicos em adubo.
                    </li>
                </ul>
            </p>

         </div>
         </div>
        <Rodape />
</>
  )
}

export default DicasReciclagem
