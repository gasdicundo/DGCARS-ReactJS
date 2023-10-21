import React, { useState } from 'react';


const Counter = ({ onAdd, text = "Agregar al carrito", q = 1 }) => {
  const [count, setCount] = useState(q);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  
  // Función para mostrar SweetAlert y luego llamar a la función onAdd
  const handleAgregarAlCarritoClick = () => {
    Swal.fire({
      icon: 'question',
      title: '¿Desea agregar este producto al carrito?',
      text: 'Confirme que desea agregar este producto al carrito.',
      showCancelButton: true,
      confirmButtonText: 'Agregar',
    }).then((result) => {
      if (result.isConfirmed) {
        // Realiza la acción de agregar al carrito (llama a la función onAdd)
        onAdd(count);
      }
    });
  };

  return (
    <div>
      <div className='contador'>
        <button className='buttonAgregar' onClick={increment}>
          Agregar
        </button>
        <span className='contadorNumero'>{count}</span>
        <button className='buttonRestar' onClick={decrement}>
          Restar
        </button>
      </div>
      <div className='contador'>
        <button className='buttonCarrito' onClick={handleAgregarAlCarritoClick}>
          {text}
        </button>
      </div>
    </div>
  );
};

export default Counter;
