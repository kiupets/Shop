export const addItemsToCart = (cartItems, item) => {
  const existingCartItem = cartItems.find(
    (arrayItem) => arrayItem.id === item.id,
  )
  return existingCartItem
    ? cartItems.map((cartItem) =>
        cartItem.id === item.id ? {...cartItem, quantity:cartItem.quantity + 1} : cartItem,
      )
    : [...cartItems, { ...item, quantity: 1 }]
}
