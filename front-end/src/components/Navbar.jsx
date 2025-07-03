import { Link } from 'react-router-dom'
import './Navbar.css'
import Paginainicial from '../pages/Paginainicial'

function Navbar() {

// window.onscroll = function() {
//     let navbar = document.querySelector('.navbar');
//     if (window.scrollY > 50) {
//         navbar.classList.add('scrolled');
//     } else {
//         navbar.classList.remove('scrolled');
//     }
// };

// Script para mudar a cor da navbar ao rolar a página

// -------------------------------------------------------------- 

// window.onscroll = function() {
//     let navbar = document.querySelector('.navbar');
//     if (window.scrollY > 50) {
//         navbar.classList.add('scrolled');
//     } else {
//         navbar.classList.remove('scrolled');
//     }
// };

// // Script para alterar o estilo do botão ao ser clicado
// document.getElementById('btn').addEventListener('click', function() {
//     this.classList.toggle('active');
//     if (this.classList.contains('active')) {
//         this.innerHTML = 'Você clicou!';
//     } else {
//         this.innerHTML = 'Clique Aqui';
//     }
// });

  return (
  //  <nav className="navbar">
  //       <ul className="menu">
  //           <li><Link >Home</Link></li>
  //           <li><Link >Sobre</Link></li>
  //           <li className="dropdown">
  //               <Link  className="dropbtn">Serviços</Link>
  //               <div classNamess="dropdown-content">
  //                   <Link >Desenvolvimento</Link>
  //                   <Link >Design</Link>
  //                   <Link >Consultoria</Link>
  //               </div>
  //           </li>
  //           <li><Link>Contato</Link></li>
  //       </ul>
  //   </nav>
     <nav class="navbar">
        <ul class="menu">
            <li><Link to={'/'}>consumo de água</Link></li>
            <li><Link to={'/'}>consumo de energia</Link></li>
            <li><Link to={'/'}>Dicas de reciclagem</Link></li>
            <li><Link to={'/'}>Como foi feito o site</Link></li>
        </ul>
        <button class="btn-interativo" id="btn">Dar nota</button>
    </nav>

  )
}

export default Navbar
