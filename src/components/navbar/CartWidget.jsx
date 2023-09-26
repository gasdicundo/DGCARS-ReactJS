import{TbShoppingCart} from "react-icons/tb"


const CartWidget = () => {
  return (
    <div className="carritoStyle">
        <TbShoppingCart/>
        <span className="contadorStyle">0</span>    
    </div>
  )
}

export default CartWidget