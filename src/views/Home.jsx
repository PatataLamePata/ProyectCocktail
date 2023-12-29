import { Container } from "react-bootstrap";
import Home from '../components/Home'
import '../views/Home.css'

export default () => {
  return(
    <Container className="text-center my-5">
      <div id="contenedorTitulo">
      <h1>Bienvenido a <div className="fw-bold">ProyectCocktail</div></h1>
      <div className="frase">El mejor lugar, para los mejores cockteles</div>
      </div>
      <Home />
    </Container>
  )
}