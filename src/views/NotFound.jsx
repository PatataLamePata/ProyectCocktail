import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Container } from 'react-bootstrap'

function NotFound () {
  return (
    <Container>
      <p className='imagen-home'>🐣</p>
      <h1>Error 404</h1>
      <h5>Mantenga la calma e inténtelo otra vez</h5>

      <Button>
        <Link to='/' className='text-white text-decoration-none'>Volver</Link>
      </Button>
    </Container>
  )
}

export default NotFound