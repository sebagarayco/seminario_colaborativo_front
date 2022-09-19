import './Total.css'
import { useSelector, useDispatch } from 'react-redux'
import { clearCart } from '../redux/cartSlice'
import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


function Total() {
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart)

  const clientData = ['Nombre', 'Apellido', 'Telefono', 'Documento', 'Domicilio']
  const [inputs, setInputs] = useState({});

  const handleChange = evt => {
    const name = evt.target.id;
    const value = evt.target.value;
    setInputs(values => ({ ...values, [name.toLowerCase()]: value }))
  }

  const getTotal = () => {
    let totalQuantity = 0
    let totalPrice = 0
    cart.forEach(item => {
      totalQuantity += item.cantidad
      totalPrice += item.precioUnitario * item.cantidad
    })
    return { totalPrice, totalQuantity }
  }

  const confirmarPedido = (event) => {
    event.preventDefault()
    var payload = {
      "detallePedido": [
        cart
      ],
      "importeTotal": getTotal().totalPrice,
      "cliente": {
        "apellido": inputs.apellido,
        "nombre": inputs.nombre,
        "telefono": inputs.telefono,
        "documento": inputs.documento,
        "domicilio": inputs.domicilio
      }
    }
    console.log(payload);
  }

  return (
    <form onSubmit={confirmarPedido}>
      <div className="total">
        <div className="cliente">
          <h2>Cliente</h2>
          <Box
            sx={{ '& .MuiTextField-root': { m: 1 }, }}
            noValidate
            autoComplete="off"
          >
            <div>
              {
                clientData.map(data => (
                  <TextField key={data}
                    fullWidth
                    required
                    id={data}
                    label={data}
                    onChange={handleChange}
                  />
                ))}
            </div>
          </Box>
        </div>
        <h2>Detalle de compra</h2>
        {
          cart.map(item => (
            <div className="total__item" key={item.id}>
              <div className="total__item__quantity">
                {item.cantidad} x {item.nombre}
              </div>
              <div className="total__item__price">
                ${item.precioUnitario * item.cantidad}
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
          <button className="total__b__pagar" type="submit">
            <strong>PAGAR</strong>
          </button>
          <button className="total__b__erase" onClick={() => dispatch(clearCart())}>
            <strong>VACIAR</strong>
          </button>
        </div>
      </div>
    </form>
  )
}

export default Total