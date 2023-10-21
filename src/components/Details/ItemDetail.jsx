import React, { useEffect } from 'react'
import Counter from '../Counter/Counter'
import styles from './style.module.css'

const ItemDetail = ({ item, onAdd}) => {

    return (
        <div className={styles.contianer}>
            <h5 className={styles.title} >{item.name}</h5>
            <img src={item.image} className={styles.image}/>
            <p>
                Stock: {item.stock}
            </p>
            <p>
                Precio: {item.price}
            </p>
            <p>
                Categoria:  {item.category}
            </p>
            <Counter onAdd={onAdd} />
        </div>
    )
}

export default ItemDetail