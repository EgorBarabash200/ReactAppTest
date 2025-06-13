import React, { useState } from 'react'
import cl from './CreatePost.module.css'
import PostInput from '../input/PostInput'
import SelectPost from '../select/SelectPost'
import PostButton from '../button/PostButton'
const CreatePost = ({ create }) => {
  const [post, setPost] = useState([{ name: '', phone: '', jobPost: null }]);
  const addNewPost = (e) => {
    e.preventDefault()
    const newPost = {
      ...post, id: Date.now()
    }
    create(newPost);
    setPost({ name: '', phone: '', jobPost: null });
  }
  console.log(setPost);
  return (
    <div className={cl.createContainer}>
      <PostInput
        value={post.name}
        onChange={e => setPost({ ...post, name: e.target.value })}
        type="text"
        placeholder="Имя"
      />
      <PostInput
        value={post.phone}
        onChange={e => setPost({ ...post, phone: e.target.value })}
        type="number"
        placeholder="Телефон"
      />
      <SelectPost
        value={post.jobPosition?.value || ""}
        onChange={selectedOption => setPost({ ...post, jobPosition: selectedOption })}
        defaultValue='Должность'
        options={[
          { value: 'employee', job: 'Сотрудник' },
          { value: 'develop', job: 'Девелоп' },
          { value: 'admin', job: 'Администратор' },
        ]}
      />
      <PostButton onClick={addNewPost}>Добавить</PostButton>
    </div>
  )
}
export default CreatePost