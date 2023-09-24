import React from 'react'
import './Footer.css'
import logo from '../../../img/logo.svg';

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>
        <img src={logo} alt="" />
      </a>
      <ul className='permalinks'>
        <li><a href="#">Inicio</a></li>
        <li><a href="">Promoções</a></li>
        <li><a href="">Contato</a></li>
      </ul>


      <div className='footer__copyrigth'>
        <small>
          &copy; Lu Devolper
        </small>
      </div>
    </footer>
  )
}

export default Footer