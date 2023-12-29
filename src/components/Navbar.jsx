import { Link } from 'react-router-dom'
import { Nav, Navbar, Container } from 'react-bootstrap'
import '../App.css'

export default function Navegador() {
  return(
    <>
      <Navbar className='navegador-color' expand='lg'>
        <div id='zona-izquierda'>
          <Nav className='me-auto' defaultActiveKey='/home' variant='pills'>
            <Link to='/' className='text-white ms-3 text-decoration-none'>
              <span className='imagen-nav'>🏠</span> Home
            </Link>
            <Link to='/bebida1' className='text-white ms-3 text-decoration-none'>
              <span className='imagen-nav'>🍸</span> Cocktail A
            </Link>
            <Link to='/bebida2' className='text-white ms-3 text-decoration-none'>
              <span className='imagen-nav'>🍹</span> Cocktail B
            </Link>
          </Nav>
        </div>
        <div id='zona-centro'>

        </div>
        <div id='zona-derecha'>
          <Navbar.Brand className='text-white'>
            <Link to='/' className='text-white ms-3 text-decoration-none'>ProyectCocktail <span className='imagen-nav'>🍾</span></Link>
          </Navbar.Brand>
        </div>
      </Navbar>
    </>
  )
}