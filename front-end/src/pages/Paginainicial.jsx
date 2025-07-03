// import axios from 'axios'
// import { useState, useEffect } from 'react';
// import { useNavigate } from "react-router-dom";
import './Paginainicial.css'
import Navbar from '../components/Navbar';

function Paginainicial() {

//   const navigate = useNavigate();

//   const [usuarios, setUsuarios] = useState([])

//   const [inputNome, setInputNome] = useState('')
//   const [inputNota, setInputNota] = useState('')
  
//   const fetchClientes = async () => {
//     try {
//         const response = await axios.get('http://localhost:3001/Usuarios');
//         setUsuarios(response.data);
//     } catch (error) {
//         console.error('Erro ao buscar clientes:', error);
//     }
// };
//   useEffect(() => {
//         fetchClientes();
//     }, []);

//   useEffect(() => {
//     console.log(usuarios);
//   }, [usuarios])

  
//   const cadastrarUsuario = async () => {

//     try {
//       const usuario = {
//         nome: inputNome,
//         nota: inputNota
//       };
//       const response = await axios.post('http://localhost:3001/Usuarios', usuario);
//       if (inputNota > 10){
//         alert("A nota deve ser de 0 a 10")
//         return
//       }
//        if (inputNome === ""){
//         alert("Usuário deve inserir nome")
//         return
//       }
//       if (response.status === 201) {
//         alert("Usuário cadastro com sucesso")  
//         fetchClientes();
//         // navigate("/login")
//           // limparForm();

//         } else {
//           console.error('Preencha os campos nome e senha!')
//         }
//          } catch (error) {
//           console.error('Erro ao adicionar cliente:', error);

//       }
//     }


  return (
    <div className='container-paginainicial'>
      <Navbar />
      <div className="container">
      <div className="container-lado-esquerdo">
     
  
      </div>
      <div className="container-lado-direto">
         <h1>O <span>futuro</span> pode estar a sua <span>frente</span>!</h1>
            <p className='texto'> O consumo é o ato de adquirir e utilizar bens ou serviços para satisfazer as necessidades e desejos humanos. Ele é uma parte fundamental da economia, pois impulsiona a produção e o desenvolvimento de mercados. O consumo pode ser dividido em dois tipos: necessário, como alimentos, roupas e moradia, e supérfluo, que abrange produtos e serviços que vão além das necessidades básicas, como luxo e entretenimento.

Nos dias de hoje, o consumo tem se tornado cada vez mais influenciado pela publicidade, pela cultura de "acumular" e pela pressão social. Isso pode levar a padrões de consumo insustentáveis, impactando o meio ambiente e a sociedade. Por isso, práticas como o consumo consciente, que visa a escolha de produtos mais sustentáveis e a redução de desperdícios, têm ganhado relevância.

Além disso, o comportamento do consumidor tem se transformado com o avanço da tecnologia, facilitando o acesso a informações e novas formas de compra, como o e-commerce, e criando novas demandas. No entanto, é essencial equilibrar o consumo com a responsabilidade, para promover um desenvolvimento econômico sustentável e socialmente justo.</p>
      </div>
      </div>
      </div>

      /* <h1>Você gostou?</h1>
        <label htmlFor="nome">Nome:</label>
        <input 
        type="text"
        placeholder='Tiago'
        value={inputNome}
        onChange={(event) => setInputNome(event.target.value)}
        required
         />

         <label htmlFor="nota">Nota:</label>
         <input 
         type="number"
         placeholder='10'
         value={inputNota}
         max={10}
         onChange={(event) => setInputNota(event.target.value)}
         required
          /> */

        /* <button onClick={cadastrarUsuario}>Mandar para o banco de dados</button> */
  
  )
}

export default Paginainicial
