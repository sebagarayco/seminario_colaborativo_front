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
                imagen={item.imagen}
                nombre={item.nombre}
                precioUnitario={item.precioUnitario}
                cantidadEnStock={item.cantidadEnStock}
                cantidad={item.cantidad}
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