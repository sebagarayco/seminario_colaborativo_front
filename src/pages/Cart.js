import './Cart.css'
import Total from '../components/Total'
import CartItem from '../components/CartItem'
import { useSelector } from 'react-redux'
import ButtonAppBar from './NavBar'

function Cart() {

  const cart = useSelector((state) => state.cart)

  return (
    <div>
      <ButtonAppBar />
      <div className="cart">
        <div className="cart__left">
          <div>
            <h3>Carrito</h3>
            {cart?.map((item) => (
              <CartItem
                key={item.id}
                id={item.id}
                image={item.image}
                title={item.title}
                price={item.price}
                stock={item.stock}
                quantity={item.quantity}
              />
            ))}
          </div>
        </div>

        <div className="cart__right">
          <Total />
        </div>
      </div>
    </div>
  )
}

export default Cart