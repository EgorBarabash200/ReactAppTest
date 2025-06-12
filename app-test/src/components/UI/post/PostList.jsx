import React from 'react'
import PostItem from './PostItem'
import cl from './PostList.module.css'
const PostList = ({ posts }) => {
  return (
    <div className={cl.listContainer}>
      {posts.map(item =>
        <PostItem posts={item} />
      )}
    </div>
  )
}

export default PostList
