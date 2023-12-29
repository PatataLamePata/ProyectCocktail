import React from 'react';
import { Container } from 'react-bootstrap';
import '../App.css';

export default function Footer() {
  return (
    <footer className='footer-color'>
        <div className='leftZone'>
            <p className='foot-text'>CocktailProyect hará de tu vida mejor,</p>
            <p className='foot-text'>ahora podrás conocer el mejor nivel de cócteles</p>
        </div>
        <div className='midZone'>
            {/* Puedes agregar contenido en la midZone si es necesario */}
        </div>
        <div className='rightZone'>
            <div>
                <p className='foot-text'><strong>Contacto:</strong></p>
                <p className='foot-text'>Email: benjaignacio.varasortega@gmail.com</p>
                <p className='foot-text'>Número: +56 9 6632 3963</p>
                <p className='foot-text'>Nombre: Benjamin Ignacio Varas Ortega</p>
                <p className='foot-text'>Instagram: @__.patata__</p>
            </div>
        </div>
    </footer>
  );
}
