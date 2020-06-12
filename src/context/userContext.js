import createDataContext from './createDataContext'
import { auth, createUserProfileDoc } from '../firebase/firebase.utils'
// import * as R from 'ramda'
import { MSGS } from '../users.types'

const setUserState = (dispatch) =>  (currentUser) => {
  console.log(currentUser)
  dispatch({
    type: MSGS.CURRENT_USER_STATE,
    currentUser,
  })
}

const signIn = (dispatch) => async (email, password) => {
  try {
    await auth.signInWithEmailAndPassword(email, password)
    dispatch({
      type: MSGS.SIGN_IN,
    })
  } catch (e) {
    console.error(e)
  }
}
const signUp = (dispatch) => async (
  email,
  password,
  confirmPassword,
  displayName,
) => {
  try {
    const { user } = await auth.createUserWithEmailAndPassword(email, password)
    await createUserProfileDoc(user, { displayName })
  } catch (e) {
    console.error(e)
  }
  dispatch({
    type: 'SIGN_UP',
  })
}

const userContext = (state, action) => {
  switch (action.type) {
    case MSGS.SIGN_IN:
      return {
        ...state,
        email: '',
        password: '',
      }
    case MSGS.SIGN_UP:
      return {
        ...state,
        email: '',
        password: '',
        confirmPassword: '',
        displayName: '',
      }
    case MSGS.CURRENT_USER_STATE: {
      const {currentUser} = action
      return {
        ...state,
        currentUser,
      }
    }

    default:
      return { state }
  }
}
export const { Context, Provider } = createDataContext(
  userContext,
  {
    signIn,
    signUp,
    setUserState
  },
  { currentUser: null },
)
