import './Home.css'
import Item from '../components/Item'
import { Delete, ShoppingCart } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import client from '../http-common'
import { useState, useEffect } from 'react'
import ButtonAppBar from './NavBar';
import { clearCart } from '../redux/cartSlice'

function Home() {
  const dispatch = useDispatch()
  const [productos, setPosts] = useState([]);

  useEffect(() => {
    client.get('/').then((response) => {
      setPosts(response.data);
    });
  }, []);

  const navigate = useNavigate()
  const cart = useSelector((state) => state.cart)

  const getTotalQuantity = () => {
    let total = 0
    cart.forEach(item => {
      total += item.cantidad
    })
    return total
  }

  return (
    <div>
      <ButtonAppBar />
      <div className="home">
        <div className="home__container">
          <div className="home__row">
            {productos.map(product => (
              <Item key={product.id}
                id={product.id}
                nombre={product.nombre}
                precioUnitario={product.precioUnitario}
                cantidadEnStock={product.cantidadEnStock}
                imagen="https://dummyimage.com/200x200/000/fff.png&text=Café"
              />
            ))
            }
          </div>
        </div>
        <div className='shopping-cart' onClick={() => navigate('/cart')}>
          <ShoppingCart fontSize="large" id='cartIcon' />
          <p>{getTotalQuantity() || 0}</p>
        </div>
        <div className='shopping-cart-empty' onClick={() => dispatch(clearCart())}>
          <Delete fontSize="large" id='cartIcon' />
        </div>
      </div>
    </div>
  )
}

export default Home