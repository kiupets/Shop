import createDataContext from './createDataContext'
import { MSGS } from './users.types'
import { addItemsToCart, removeItem } from '../components/cart/cart.utils'

const setToggle = (dispatch) => () => {
  dispatch({
    type: MSGS.TOOGLE_CART,
  })
}
const addItems = (dispatch) => (item) => {
  dispatch({
    type: MSGS.ADD_ITEMS,
    item,
  })
}
const clearItemFromCart = (dispatch) => (item) => {
  dispatch({
    type: MSGS.CLEAR_ITEM_FROM_CART,
    item,
  })
}

const removeItemFromCart = (dispatch) => (item) => {
  dispatch({
    type: MSGS.REMOVE_ITEM,
    item,
  })
}
const renderToogleContext = (state, action) => {
  switch (action.type) {
    case MSGS.TOOGLE_CART:
      const { hidden } = state
      return { ...state, hidden: !hidden }
    case MSGS.ADD_ITEMS: {
      const { item } = action
      const { cartItems } = state
      return { ...state, cartItems: addItemsToCart(cartItems, item) }
    }
    case MSGS.CLEAR_ITEM_FROM_CART: {
      const { item } = action
      const { cartItems } = state
      const updatedcartItems = cartItems.filter(
        (cartItem) => cartItem.id !== item.id,
      )
      return { ...state, cartItems: updatedcartItems }
    }
    case MSGS.REMOVE_ITEM: {
      const { item } = action
      const { cartItems } = state
      return { ...state, cartItems: removeItem(cartItems, item) }
    }

    default:
      return { state }
  }
}
export const { Context, Provider } = createDataContext(
  renderToogleContext,
  {
    setToggle,
    addItems,
    clearItemFromCart,
    removeItemFromCart,
  },
  {
    hidden: true,
    cartItems: [],
  },
)
