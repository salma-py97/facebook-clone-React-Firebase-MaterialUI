import StoryReel from '../StoryReel/StoryReel'
import MessageSender from '../MessageSender/MessageSender'
import Post from '../Post/Post'
import './Feed.css'

import db from '../../../firebase'
import { useEffect, useState } from 'react'

const Feed = () => {

  // keep track of posts
  const [posts, setPosts] = useState([])

  // when Feed loads and/or when the posts change in firebase we want all the posts in firebase to get displayed
  useEffect(() => {
    db.collection('posts')
    .orderBy("timestamp", "desc")
    .onSnapshot(snapshot => (
      setPosts(snapshot.docs.map(doc => ({id: doc.id, data:doc.data()})))
    ))
  }, [])


  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      {posts.map(post => (
        <Post key={post.id} username={post.data.username} image={post.data.image} timestamp={post.data.timestamp} profilePic={post.data.profilePic} message={post.data.message} />

      ))}
    </div>
  )
}

export default Feed
