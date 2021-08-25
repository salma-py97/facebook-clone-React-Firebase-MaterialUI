import { Button } from '@material-ui/core'
import './Login.css'
import { auth, provider } from '../../firebase'
import { useStateValue } from '../../StateProvider'
import { actionTypes } from '../../reducer'


const Login = () => {
  const [state, dispatch] = useStateValue()

  const signIn = () => {
    // sign in/login in
    auth.signInWithPopup(provider)
    .then(result => {

      dispatch({type: actionTypes.SET_USER, user: result.user})
    }).catch(error => alert(error.message))

  }

  const logIn = () => {
    signIn()
  }


  return (
    <div className="login">
      <div className="login__logo">
        <img src="https://i.ibb.co/52ryVT3/fb-logo-768x432-removebg-preview.png" alt="logo" />
        <img className="login__text" src="https://i.ibb.co/ZWP1xCq/Facebook-Logo-Meaning-768x270-removebg-preview.png" alt="logo-text" />
      </div>
      <Button className="login__button" type="submit" onClick={logIn} >Sign In</Button>
    </div>
  )
}

export default Login
