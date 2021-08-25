import { Avatar } from '@material-ui/core'
import './MessageSender.css'
import {useState} from 'react'

import VideocamSharpIcon from '@material-ui/icons/VideocamSharp';
import PhotoLibrarySharpIcon from '@material-ui/icons/PhotoLibrarySharp';
import InsertEmoticonSharpIcon from '@material-ui/icons/InsertEmoticonSharp';

import { useStateValue } from '../../../StateProvider';

// db
import firebase from 'firebase'
import db from '../../../firebase'


const MessageSender = () => {

  // Pulling user name from auth
  const [{user}, dispatch] = useStateValue()

  // State
  const [input, setInput] = useState("")
  const [imageURL, setImageURL] = useState("")

  
  // Functions
  const handleSubmit = e => {
    e.preventDefault()
    // db -> sending data to firebase firestore realtime db
    db.collection('posts').add({
      username: user.displayName,
      image: imageURL,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      profilePic: user.photoURL,
      message: input,
    })

    // clearing form
    setInput("")
    setImageURL("")

  }


  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <Avatar src={user.photoURL} />
        <form>
          <input className="messageSender__input" type="text" placeholder={`What's on your mind, ${user.displayName}?`} value={input} onChange={e => setInput(e.target.value)} />
          <input type="text" placeholder="image URL (Optional)" value={imageURL} onChange={e => setImageURL(e.target.value)} />

          <button onClick={handleSubmit} type="submit" style={{display: 'none'}} >
            Hidden Submit
          </button>

        </form>
      </div>
      <div className="messageSender__bottom">
        <div className="messageSender__option">
          <VideocamSharpIcon style={{color: "red"}} />
          <h4>Live Video</h4>
        </div>
        <div className="messageSender__option">
          <PhotoLibrarySharpIcon style={{color: "green"}} />
          <h4>Photo/Video</h4>
        </div>
        <div className="messageSender__option">
          <InsertEmoticonSharpIcon style={{color: "orange"}} />  
          <h4>Feeling/Activity</h4>
        </div>
      </div>
    </div>
  )
}

export default MessageSender
