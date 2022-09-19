import './CartItem.css'
import { incrementQuantity, decrementQuantity, removeItem } from '../redux/cartSlice'
import { useDispatch } from 'react-redux'

function CartItem({ id, image, title, price, stock, quantity = 0 }) {
  const dispatch = useDispatch()

  return (
    <div className="cartItem">
      <img className="cartItem__image" src={image} alt='item' />
      <div className="cartItem__info">
        <div className="cartItem__title">{title}</div>
        <div className="cartItem__price">
          Precio: ${price}.-
        </div>
        <div className="cartItem__price">
          Stock: {stock} unidades
        </div>
        <div className='cartItem__incrDec'>
          <button onClick={() => dispatch(decrementQuantity(id))}>-</button>
          <p>{quantity}</p>
          <button onClick={() => dispatch(incrementQuantity(id, stock))}>+</button>
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