import { Avatar } from '@material-ui/core'
import './MessageSender.css'

import VideocamSharpIcon from '@material-ui/icons/VideocamSharp';
import PhotoLibrarySharpIcon from '@material-ui/icons/PhotoLibrarySharp';
import InsertEmoticonSharpIcon from '@material-ui/icons/InsertEmoticonSharp';


const MessageSender = () => {
  // Functions
  const handleSubmit = e => {
    e.preventDefault()
    console.log("submitted")

  }

  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <Avatar />
        <form>
          <input className="messageSender__input" type="text" placeholder="What's on your mind, Salma EL BARMAKI" />
          <input type="text" placeholder="image URL (Optional)" />

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
