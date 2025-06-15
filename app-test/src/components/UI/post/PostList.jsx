import React from 'react'
import PostItem from './PostItem'
import cl from './PostList.module.css'

// Разбить на две папки ListCards и Card
// Компоненты будут называться также

const PostList = ({ posts }) => {
  return (
    <div className={cl.listContainer}>
      {posts.map((item, index) =>
      // поменять пропс с posts на cards
        <PostItem posts={item} key={`${index}-card`} />
      )}
    </div>
  )
}

export default PostList
