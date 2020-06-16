import createDataContext from './createDataContext'

import { MSGS } from '../users.types'
import { addItemsToCart } from '../components/cart/cart.utils'

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
const renderToogleContext = (state, action) => {
  switch (action.type) {
    case MSGS.TOOGLE_CART:
      const { hidden } = state
      return { ...state, hidden: !hidden }
    case MSGS.ADD_ITEMS:
      const { item } = action
      const { cartItems } = state
      return { ...state, cartItems: addItemsToCart(cartItems, item) }
    default:
      return { state }
  }
}
export const { Context, Provider } = createDataContext(
  renderToogleContext,
  {
    setToggle,
    addItems,
  },
  {
    hidden: true,
    cartItems: [],
  },
)
