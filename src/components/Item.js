import './Item.css'
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

function Item({ id, title, image, price, stock }) {

  const dispatch = useDispatch()

  return (
    <div className="item">
      <div className="item__info">
        <div className="item__title"><strong>{title}</strong></div>
        <div className="item__price">
          Precio: ${price}.-
        </div>
        <div className="item__stock">
          Stock: {stock} unidades
        </div>
      </div>
      <img
        src={image}
        alt="item"
      />
      <button
        onClick={() =>
          dispatch(addToCart({
            id, title, image, price, stock
          }))
        }>Agregar
      </button>
    </div>
  )
}

export default Item