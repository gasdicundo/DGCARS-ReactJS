import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Counter from '../Counter/Counter';

const CardItem = ({ item }) => {
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
                    
                    <button className='agregarAlCarrito'>Agregar al carrito</button>
                </div>
            </Card.Body>

        </Card>

    );
}

export default CardItem