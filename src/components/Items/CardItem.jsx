import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


const CardItem = ({ item }) => {
  const handleAgregarAlCarritoClick = () => {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Pagina en progreso',
        footer: '<a>Proximamente habilitado</a>'
      })
    // alert(`Se ha agregado "${item.title}" al carrito`);
  };

  return (
    <Card className='cardStyle'>
      <Card.Img className='cardImg' variant="top" src={item.image}/>
      <Card.Body className='cardBody'>
        <Card.Title className='cardTitle'>{item.title}</Card.Title>
        <Card.Text>
          $ {item.price}
        </Card.Text>
        <Link to={`/detalle/${item.id}`}>
          <button className='detalle'>Detalles</button>
        </Link>
        <div className='CounterCard'>
          <button className='agregarAlCarrito' id='agregarAlCarrito' onClick={handleAgregarAlCarritoClick}>
            Agregar al carrito
          </button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default CardItem;
