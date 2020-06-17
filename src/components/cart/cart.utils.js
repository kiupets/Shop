import { createSelector } from 'reselect'
export const addItemsToCart = (cartItems, item) => {
  const existingCartItem = cartItems.find(
    (arrayItem) => arrayItem.id === item.id,
  )
  return existingCartItem
    ? cartItems.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem,
      )
    : [...cartItems, { ...item, quantity: 1 }]
}
export const removeItem = (cartItems, item) => {
  const existingItem = cartItems.find((cartItem) => cartItem.id === item.id)
  if (existingItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== item.id)
  }
  return cartItems.map((cartItem) =>
    cartItem.id === item.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem,
  )
}

//SELECTORS FOR REDUCE ITEMS QUATITY
const selectCartItems = (state) => state.cartItems
export const cartItemSelector = createSelector(
  [selectCartItems],
  (cartItems) => cartItems,
)
export const CartItemsSelector = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce((acc, cartItems) => acc + cartItems.quantity, 0),
)
const selectHidden = (state) => state.hidden
export const hiddenSelector = createSelector([selectHidden], (hidden) => hidden)
