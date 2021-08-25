import { useReducer } from 'react'

import FacebookContext from './facebookContext'
import FacebookReducer from './facebookReducer'

import {SET_USER} from './types'
import { auth, provider } from '../../firebase'




const FacebookState = (props) => {
  const initialState = {
    user: null,
  }

  // reducer
  const [state, dispatch] = useReducer(FacebookReducer, initialState)

  // function
  const signIn = () => {
    // sign in/login in
    auth.signInWithPopup(provider)
    .then(result => {
      dispatch({type: {SET_USER}, payload: result})
      console.log(result)
    }).catch(error => alert(error.message))

  }

  return (
    <FacebookContext.Provider value={{
      user: state.user,
      signIn
    }} >
      {props.children}
    </FacebookContext.Provider>
  )
}

export default FacebookState
