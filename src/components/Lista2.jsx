import React, { useState, useEffect } from 'react';
import { Card, Container, CardGroup, Button, Form, Modal } from 'react-bootstrap';
import '../App.css';

const App = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [visibleCards, setVisibleCards] = useState(6);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCocktail, setSelectedCocktail] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://thecocktaildb.com/api/json/v1/1/search.php?f=b${searchTerm && `&c=${searchTerm}`}`
        );

        if (!response.ok) {
          throw new Error('Error al obtener los datos');
        }

        const jsonData = await response.json();
        setData(jsonData.drinks);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [searchTerm]);

  useEffect(() => {
    // Filtra los datos cuando el término de búsqueda cambia
    const filtered = data.filter((post) =>
      post.strCategory.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filtered);
  }, [data, searchTerm]);

  const calculateColumns = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth < 576){
      return 1; 
    }else if (screenWidth < 768){
      return 2;
    }else{
      return 3;
    }
    
  };

  const handleVerMasClick = () => {
    setVisibleCards((prevVisibleCards) => prevVisibleCards + 6);
  };

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://thecocktaildb.com/api/json/v1/1/search.php?f=b${searchTerm && `&c=${searchTerm}`}`
      );

      if (!response.ok) {
        throw new Error('Error al obtener los datos');
      }

      const jsonData = await response.json();
      setData(jsonData.drinks);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCardClick = (cocktail) => {
    setSelectedCocktail(cocktail);
    setModalVisible(true);
  }
  const handleModalClose = () => {
    setSelectedCocktail(null);
    setModalVisible(false);
  };

  return (
    <Container fluid>
      <h1>Los mejores cockteles B</h1>

      <Form.Group controlId="formSearch" className="d-flex">
        <Form.Control
          type="text"
          placeholder="Buscar por categoría"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </Form.Group>

      <CardGroup>
        {[...Array(Math.ceil(visibleCards / calculateColumns()))].map((_, rowIndex) => (
          <div key={rowIndex} className="d-flex">
            {filteredData.slice(rowIndex * calculateColumns(), (rowIndex + 1) * calculateColumns()).map((post, i) => (
              <Card
                key={i}
                className={`col-${12 / calculateColumns()}`}
                style={{ margin: '10px' }}
                onClick={() => handleCardClick(post)}  // <-- Añade este onClick
              >
                <Card.Img className='imagen' variant="top" src={post.strDrinkThumb} />
                <Card.Body>
                  <Card.Title>Bebida o coctel</Card.Title>
                  <Card.Text>{`ID: ${post.idDrink}`}</Card.Text>
                  <Card.Text>{`Nombre: ${post.strDrink}`}</Card.Text>
                  <Card.Text>{`Categoria: ${post.strCategory}`}</Card.Text>
                </Card.Body>
              </Card>
            ))}
          </div>
        ))}
      </CardGroup>

      {visibleCards < filteredData.length && (
        <div className="text-center">
          <Button variant="primary" onClick={handleVerMasClick} className='botonLista'>
            Ver Más
          </Button>
        </div>
      )}

      {selectedCocktail && (
        <Modal show={modalVisible} onHide={handleModalClose}>
          <Modal.Header closeButton>
            <Modal.Title>{selectedCocktail.strDrink}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className='contImg'>
              <img src={selectedCocktail.strDrinkThumb} alt={selectedCocktail.strDrink} className='modalImg' />
            </div>
            <div className='contText'>
              <div className='textoModal'>Id: {selectedCocktail.idDrink}</div>
              <div className='textoModal'>Categoria: {selectedCocktail.strCategory}</div>
              <div className='textoModal'>Clasificación: {selectedCocktail.strIBA}</div>
              <div className='textoModal'>Vaso: {selectedCocktail.strGlass}</div>
              <div className='textoModal'>Ingredientes: {
                                                          [
                                                            selectedCocktail.strIngredient1,
                                                            selectedCocktail.strIngredient2,
                                                            selectedCocktail.strIngredient3,
                                                            selectedCocktail.strIngredient4,
                                                            selectedCocktail.strIngredient5,
                                                            selectedCocktail.strIngredient6,
                                                            selectedCocktail.strIngredient7,
                                                            selectedCocktail.strIngredient8,
                                                            selectedCocktail.strIngredient9,
                                                            selectedCocktail.strIngredient10,
                                                            selectedCocktail.strIngredient11,
                                                            selectedCocktail.strIngredient12,
                                                            selectedCocktail.strIngredient13,
                                                            selectedCocktail.strIngredient14,
                                                            selectedCocktail.strIngredient15
                                                          ]
                                                            .filter(ingredient => ingredient)
                                                            .join(", ")
                                                        }
              </div>
              <div className='textoModal'>Receta: {selectedCocktail.strInstructions}</div>
            </div>
          </Modal.Body>
        </Modal>
      )}
    </Container>
  );
};

export default App;


