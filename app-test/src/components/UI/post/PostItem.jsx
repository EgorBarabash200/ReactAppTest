import React from 'react'
import cl from './PostItem.module.css'
const PostItem = ({ posts }) => {
    const getBackgroundColor = () => {
        const jobValue = posts.jobPosition.value;
        if (jobValue === 'employee') {
            return '#09cd4e';
        } else if (jobValue === 'develop') {
            return '#eddd09';
        } else {
            return '#b41b04';
        }
    }
    return (
        <div style={{ backgroundColor: getBackgroundColor() }} className={cl.mainDiv}>
            <div className={cl.textDiv}>
                <p>Имя {posts.name}</p>
                <p>Телефон {posts.phone}</p>
                <p>Должность {posts.jobPosition.job} </p>
            </div>
            <div className={cl.imgDiv}>
                <div className={cl.redactDiv}></div>
                <div className={cl.deletDiv}></div>
            </div>
        </div>
    )
}

export default PostItem
