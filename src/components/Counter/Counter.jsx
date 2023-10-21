import React, { useState } from 'react'

const Counter = ({onAdd, text = "Agregar al carrito", q = 1}) => {
    const [count, setCount] = useState(q)

    const increment = () => {
        
        setCount(count + 1)
    }
    const decrement = () => {
        if(count > 1){
            setCount(count - 1)
        }
    }
  return (
    <div>    
        <div className='contador'>
            <button className='buttonAgregar' onClick={increment}>Agregar</button>
            <span className='contadorNumero'>{ count }</span>
            <button className='buttonRestar' onClick={decrement}>Restar</button>
        </div>
        <div className='contador'>
        <button className='buttonCarrito' onClick={() => onAdd(count) }>{text}</button>
    </div>
    </div>

  )
}

export default Counter