import React, { useEffect } from 'react'
import Counter from '../Counter/Counter'

const ItemDetail = ({ item }) => {

    return (
        <div className='detalles'>
            <div className='cardDetalles'>
            <h5>{item.title}</h5>
            <img src={item.image} />
            <p>
                Description: {item.description}
            </p>
            <p>
                $ {item.price}
            </p>
            <p>
                Category:  {item.category}
            </p>
            <Counter />
            <button className='agregarAlCarrito'>Agregar al carrito</button>
        </div>
        </div>
    )
}

export default ItemDetail