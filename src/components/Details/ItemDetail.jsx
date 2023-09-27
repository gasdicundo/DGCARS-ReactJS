import React, { useEffect } from 'react'
import Counter from '../Counter/Counter'

const ItemDetail = ({ item }) => {
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
        <div className='detalles'>
            <div className='cardDetalles'>
            <h5>{item.title}</h5>
            <img src={item.image} />
            <p className='textoDescripcion'>
                Description: {item.description}
            </p>
            <p>
                $ {item.price}
            </p>
            <p>
                Category:  {item.category}
            </p>
            <Counter />
            <button className='agregarAlCarrito' id='agregarAlCarrito' onClick={handleAgregarAlCarritoClick}>
            Agregar al carrito
          </button>
        </div>
        </div>
    )
}

export default ItemDetail