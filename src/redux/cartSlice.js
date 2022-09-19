import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.cart.find((item) => item.id === action.payload.id);
      console.log('El stock es: ' + action.payload.cantidadEnStock + ' y cantidad en carrito es: ' + itemInCart?.cantidad);
      console.log('El state esta asi: ' + JSON.stringify(state));
      if (!itemInCart) {
        state.cart.push({ ...action.payload, cantidad: 1 });
      } else {
        if (itemInCart.cantidad < action.payload.cantidadEnStock) {
          itemInCart.cantidad++;
        } else {
          alert('No hay mas stock de este producto.');
        }
      }
    },
    incrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      console.log('Cantidad es: ' + item.cantidad + ' y stock es: ' + item.cantidadEnStock);
      if (item.cantidad < item.cantidadEnStock) {
        item.cantidad++;
      } else {
        alert('No hay mas stock de este producto.');
      }
    },
    decrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item.cantidad === 1) {
        item.cantidad = 1
      } else {
        item.cantidad--;
      }
    },
    removeItem: (state, action) => {
      const removeItem = state.cart.filter((item) => item.id !== action.payload);
      state.cart = removeItem;
      console.log('El state esta asi: ' + JSON.stringify(state));
    },
    clearCart: (state) => {
      state.cart = [];
      console.log('El state esta asi: ' + JSON.stringify(state));
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeItem,
  clearCart,
} = cartSlice.actions;