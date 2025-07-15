import React from 'react'
import cl from './Card.module.css'

const Card = ({ cards }) => {
    const getBackgroundColor = () => {
        const jobValue = cards.jobPosition.value;
        switch (jobValue) {
            case 'employee':
                return '#09cd4e';
            case 'develop':
                return '#eddd09';
            case 'admin':
                return '#b41b04';
        }
    }
    return (
        <div style={{ backgroundColor: getBackgroundColor() }} className={cl.mainDiv}>
            <div className={cl.textDiv}>
                <p>Имя {cards.name}</p>
                <p>Телефон {cards.phoneCode} {cards.phone}</p>
                <p>Должность {cards.jobPosition.job} </p>
            </div>
            <div className={cl.imgDiv}>
                <div className={cl.redactDiv}></div>
                <div className={cl.deletDiv}></div>
            </div>
        </div>
    )
}

export default Card
