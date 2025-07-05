import { Link } from 'react-router-dom'
import './Navbar.css'
import './Modal.css'
import axios from  'axios'
import { useState } from 'react';
import { useEffect } from 'react';

function Navbar() {

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Aplica a classe "dark" ao body quando darkMode for true
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  }

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [erro, setErro] = useState('');

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

   const [usuarios, setUsuarios] = useState([])

   const [inputNome, setInputNome] = useState('')
   const [inputNota, setInputNota] = useState('')
   const [inputAlunoOuProfessor, setInputAlunoOuProfessor] = useState('')

  
      useEffect(() => {
        fetchUsuarios();
    }, []);

    
       useEffect(() => {
         console.log(usuarios);
       }, [usuarios])

   const fetchUsuarios = async () => {
     try {
         const response = await axios.get('http://localhost:14127/Usuarios');
         setUsuarios(response.data);
     } catch (error) {
         console.error('Erro ao buscar usários:', error);
     }
 };

  
   const cadastrarUsuario = async () => {

     try {
       const usuario = {
         nome: inputNome,
         nota: inputNota,
         professor_aluno : inputAlunoOuProfessor
        };
        if (!inputNome && !inputNota && !inputAlunoOuProfessor) {
        setErro('Preencha os campos vázios')
         return;
       }
      //  if (nulo){
      //   setErro('Opção inválida')
      //  }
       else if (inputNota < 0 || inputNota > 10) {
        setErro("A nota deve ser 0 a 10")
        return;
       } else if (inputNota >= 0 && inputNota <= 10){
        const response = await axios.post('http://localhost:14127/Usuarios', usuario);
        if (response.status === 201) {
          alert(`Obrigado pela nota ${inputNome}!`)
          closeModal();
          limparForm();
        }
      }
          } catch (error) {
           console.error('Erro ao adicionar cliente:', error);

       }
     }

     function limparForm() {
      setInputAlunoOuProfessor('')
      setInputNome('')
      setInputNota('')
      setErro('')
     }


  return (

     <nav className="navbar">
        <ul className="menu">
            <li><Link to={'/consumodeagua'}>consumo de água</Link></li>
            <li><Link to={'/'}>consumo de energia</Link></li>
            <li><Link to={'/'}>Dicas de reciclagem</Link></li>
            <li><Link to={'/'}>Como foi feito o site</Link></li>
        </ul>
  <button onClick={toggleDarkMode} className='btn-dark-mode'>
        {darkMode ? '☀️ Modo Claro' : '🌙 Modo Escuro'}
      </button>
        <button className="btn-nota" id="btn" onClick={openModal}>Dar nota</button>

    
        {isModalOpen && (
          <div className="modal-overlay">
            <div className="modal-content">
               <div className="fim">
            <span onClick={closeModal} className='close-modal'>&times;</span>
         <div className="btn-close-modal">
               <h1>O que você achou?</h1> 
              </div>
         </div>
        <input 
        type="text"
        placeholder='Nome'
        value={inputNome}
        onChange={(event) => setInputNome(event.target.value)}
        required
         />

         <input 
         type="number"
         placeholder='Nota'
         value={inputNota}
         max={10}
         onChange={(event) => setInputNota(event.target.value)}
         required
          /> 

        <input 
        type="text"
        placeholder='Você é aluno ou professor?'
        value={inputAlunoOuProfessor}
        onChange ={(event) => setInputAlunoOuProfessor(event.target.value)}
        required />
          {/* <select value={options} onChange={(e) => setOptions(e.target.value)}> 
            <option value="">Selecionar</option>
            <option value="professor">Avaliador/professor</option>
            <option value="aluno">Aluno</option>
          </select> */}

         <button onClick={cadastrarUsuario} className='btn-get'>Mandar para o banco de dados</button> 
            {erro && <p style={{color: 'red' }}>{erro}</p>}
            </div>
          </div>
        )}
    </nav>

  )
}

export default Navbar