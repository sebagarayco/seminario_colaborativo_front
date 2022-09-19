import './Total.css'
import { useSelector, useDispatch } from 'react-redux'
import { clearCart } from '../redux/cartSlice'

function Total() {
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart)

  const pagar = () => {
    alert('El state esta asi: ' + JSON.stringify(cart))
  }

  const getTotal = () => {
    let totalQuantity = 0
    let totalPrice = 0
    cart.forEach(item => {
      totalQuantity += item.quantity
      totalPrice += item.price * item.quantity
    })
    return { totalPrice, totalQuantity }
  }

  return (
    <div className="total">
      <h2>Detalle de compra</h2>
      {
        cart.map(item => (
          <div className="total__item" key={item.id}>
            <div className="total__item__quantity">
              {item.quantity} x {item.title}
            </div>
            <div className="total__item__price">
              ${item.price * item.quantity}
            </div>
          </div>
        ))
      }
      <div className="total__p__line">
        <div className="total__p">
          Total ({getTotal().totalQuantity} productos):
        </div>
        <div className="total__p__value">
          ${getTotal().totalPrice}
        </div>
      </div>
      <div className="total__buttons">
        <button className="total__b__pagar" onClick={pagar}>
          <strong>PAGAR</strong>
        </button>
        <button className="total__b__erase" onClick={() => dispatch(clearCart())}>
          <strong>VACIAR</strong>
        </button>
      </div>
    </div>
  )
}

export default Total