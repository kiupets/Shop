import { createSelector } from 'reselect'

const selectCartItems = (state) => state.cartItems
export const cartItemSelector = createSelector(
  [selectCartItems],
  (cartItems) => cartItems,
)

export const CartItemsPriceReducer = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (acc, cartItems) => acc + cartItems.price * cartItems.quantity,
      0,
    ),
)
