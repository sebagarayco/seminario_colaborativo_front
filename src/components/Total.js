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
    console.log('El ' + evt.target.id + ' es ' + evt.target.value)
    const name = evt.target.id;
    const value = evt.target.value;
    setInputs(values => ({ ...values, [name]: value }))
    console.log(inputs)
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


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted ✅' + JSON.stringify(event, inputs));
  }

  return (
    <form onSubmit={handleSubmit}>
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