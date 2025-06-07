import React from 'react'
import classes from './CreatePost.module.css'
import PostInput from '../input/PostInput'
import SelectPost from '../select/SelectPost'
import PostButton from '../button/PostButton'
const CreatePost = () => {
  return (
    <div className={classes.createContainer}>
      <PostInput type="text" placeholder="Имя"/>
      <PostInput type="number" placeholder="Телефон"/>
      <SelectPost
      defaultValue = 'Должность'
      options = {[
        {value: 'employee', name: 'Сотрудник'},
        {value: 'depchief', name: 'Зам начальника'},
        {value: 'admin', name: 'Администратор'},
      ]}
      />
      <PostButton>Добавить</PostButton>
    </div>
  )
}

export default CreatePost
