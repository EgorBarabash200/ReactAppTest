import React, { useState } from 'react'
import classes from './Container.module.css'
import CreatePost from '../create/CreatePost'
import PostList from '../post/PostList'
const Container = () => {
  const [posts, setPosts] = useState([]);
  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  }
  return (
    <div className={classes.mainContainer}>
      <CreatePost create={createPost} />
      <PostList posts={posts} />
    </div>
  )
}

export default Container
