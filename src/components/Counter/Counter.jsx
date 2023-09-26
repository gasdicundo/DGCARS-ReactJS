import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)

    const increment = () => {
        
        setCount(count + 1)
    }
    const decrement = () => {
        if(count > 0){
            setCount(count - 1)
        }
    }
  return (
    <div className='contador'>
        <button className='buttonAgregar' onClick={increment}>Agregar</button>
        <span className='contadorNumero'>{ count }</span>
        <button className='buttonRestar' onClick={decrement}>Restar</button>
    </div>
  )
}

export default Counter