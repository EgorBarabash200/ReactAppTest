import React from 'react'
import classes from './Container.module.css'
import CreatePost from '../create/CreatePost'
const Container = () => {
  return (
    <div className={classes.mainContainer}>
      <CreatePost/>
    </div>
  )
}

export default Container
