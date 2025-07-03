import axios from 'axios'
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import './Paginainicial.css'

function Paginainicial() {

  const navigate = useNavigate();

  const [usuarios, setUsuarios] = useState([])

  const [inputNome, setInputNome] = useState('')
  const [inputNota, setInputNota] = useState('')
  
  const fetchClientes = async () => {
    try {
        const response = await axios.get('http://localhost:3001/Usuarios');
        setUsuarios(response.data);
    } catch (error) {
        console.error('Erro ao buscar clientes:', error);
    }
};
  useEffect(() => {
        fetchClientes();
    }, []);

  useEffect(() => {
    console.log(usuarios);
  }, [usuarios])

  
  const cadastrarUsuario = async () => {

    try {
      const usuario = {
        nome: inputNome,
        nota: inputNota
      };
      const response = await axios.post('http://localhost:3001/Usuarios', usuario);
      if (inputNota > 10){
        alert("A nota deve ser de 0 a 10")
        return
      }
      if (response.status === 201) {
        alert("Usuário cadastro com sucesso")  
        fetchClientes();
        navigate("/login")
          // limparForm();

        } else {
          console.error('Preencha os campos nome e senha!')
        }
         } catch (error) {
          console.error('Erro ao adicionar cliente:', error);

      }
    }
  return (
    <div>
        <h1>Seja bem vindo </h1>

        

        <h1>Você gostou?</h1>
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
          />

        <button onClick={cadastrarUsuario}>Mandar para o banco de dados</button>
    </div>
  )
}

export default Paginainicial
