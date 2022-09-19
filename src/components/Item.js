import './Item.css'
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

function Item({ id, nombre, imagen, precioUnitario, cantidadEnStock }) {

  const dispatch = useDispatch()

  return (
    <div className="item">
      <div className="item__info">
        <div className="item__title"><strong>{nombre}</strong></div>
        <div className="item__price">
          Precio: ${precioUnitario}.-
        </div>
        <div className="item__stock">
          Stock: {cantidadEnStock} unidades
        </div>
      </div>
      <img
        src={imagen}
        alt="item"
      />
      <button
        onClick={() =>
          dispatch(addToCart({
            id, nombre, imagen, precioUnitario, cantidadEnStock
          }))
        }>Agregar
      </button>
    </div>
  )
}

export default Item