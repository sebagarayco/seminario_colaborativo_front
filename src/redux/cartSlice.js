import { createSlice } from '@reduxjs/toolkit';


const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.cart.find((item) => item.id === action.payload.id);
      console.log('El stock es: ' + action.payload.stock + ' y cantidad en carrito es: ' + itemInCart?.quantity);
      console.log('El state esta asi: ' + JSON.stringify(state));
      if (!itemInCart) {
        state.cart.push({ ...action.payload, quantity: 1 });
      } else {
        if (itemInCart.quantity < action.payload.stock) {
          itemInCart.quantity++;
        } else {
          alert('No hay mas stock de este producto.');
        }
      }
    },
    incrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      console.log('Cantidad es: ' + item.quantity + ' y stock es: ' + item.stock);
      if (item.quantity < item.stock) {
        item.quantity++;
      } else {
        alert('No hay mas stock de este producto.');
      }
    },
    decrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item.quantity === 1) {
        item.quantity = 1
      } else {
        item.quantity--;
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