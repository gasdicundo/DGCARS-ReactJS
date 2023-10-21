import React, { useEffect } from 'react'
import Counter from '../Counter/Counter'
import styles from './style.module.css'

const ItemDetail = ({ item, onAdd}) => {

    return (
        <div className='detalles'>
            <div className='cardDetalles'>
            <h5 className={styles.title} >{item.name}</h5>
            <img src={item.image} className={styles.image}/>
            <p className='textoDescripcion'>
               Description: {item.description}
            </p>
            <p>
                $ {item.price}
            </p>
            <p>
                Categoria:  {item.category}
            </p>
            <Counter onAdd={onAdd} />
        </div>
        </div>
    )
}

export default ItemDetail