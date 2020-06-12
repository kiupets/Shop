import createDataContext from './createDataContext'
import ShopData from '../pages/shopPage/shopData'
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
  }
}
export const { Context, Provider } = createDataContext(
  renderToogleContext,
  {
    setToggle,
    addItems,
  },
  {
    hidden: false,
    cartItems: [],
  },
)
