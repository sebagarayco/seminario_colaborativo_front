import './CartItem.css'
import { incrementQuantity, decrementQuantity, removeItem } from '../redux/cartSlice'
import { useDispatch } from 'react-redux'

function CartItem({ id, imagen, nombre, precioUnitario, cantidadEnStock, cantidad = 0 }) {
  const dispatch = useDispatch()

  return (
    <div className="cartItem">
      <img className="cartItem__image" src={imagen} alt='item' />
      <div className="cartItem__info">
        <div className="cartItem__title">{nombre}</div>
        <div className="cartItem__price">
          Precio: ${precioUnitario}.-
        </div>
        <div className="cartItem__price">
          Stock: {cantidadEnStock} unidades
        </div>
        <div className='cartItem__incrDec'>
          <button onClick={() => dispatch(decrementQuantity(id))}>-</button>
          <p>{cantidad}</p>
          <button onClick={() => dispatch(incrementQuantity(id, cantidadEnStock))}>+</button>
        </div>
        <button
          className='cartItem__removeButton'
          onClick={() => dispatch(removeItem(id))}>
          Eliminar
        </button>
      </div>
    </div>
  )
}

export default CartItem