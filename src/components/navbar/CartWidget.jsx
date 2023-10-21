import React, { useContext } from 'react';
import { TbShoppingCart } from 'react-icons/tb';
import CartContext from '../../context/cartContext/CartContext';

const CartWidget = () => {
  const { cart } = useContext(CartContext);

  // Calcula la cantidad total de productos en el carrito
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="carritoStyle">
      <TbShoppingCart />
      <span className="contadorStyle">{cartItemCount}</span>
    </div>
  );
}

export default CartWidget;
