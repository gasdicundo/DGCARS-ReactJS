import{BsCartPlus} from "react-icons/bs"

const CartWidget = () => {
  return (
    <div className="carritoStyle">
        <BsCartPlus/>
        <span className="contadorStyle">0</span>    
    </div>
  )
}

export default CartWidget