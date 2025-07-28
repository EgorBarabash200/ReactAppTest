import React from 'react'
import cl from './Card.module.css'
const Card = ({ card, onDelete, onEdit }) => {
    const [isOpen, setOpen] = useState(false);
    const [editedCard, setEditedCard] = useState({ ...card });

    const getBackgroundColor = () => {
        const jobValue = card.jobPosition;
        switch (jobValue) {
            case 'employee':
                return '#09cd4e';
            case 'develop':
                return '#eddd09';
            case 'admin':
                return '#b41b04';
        };
    }
    const jobSelectName = () => {
        const jobName = card.jobPosition;
        switch (jobName) {
            case 'employee':
                return 'Сотрудник';
            case 'develop':
                return 'Девелоп';
            case 'admin':
                return 'Администратор'
        }
    }

    return (
        <div style={{ backgroundColor: getBackgroundColor() }} className={cl.mainDiv}>
            <div className={cl.textDiv}>
                <p>Имя {card.name}</p>
                <p>Телефон {card.phoneCode} {card.phone}</p>
                <p>Должность {jobSelectName()} </p>
            </div>
            <div className={cl.imgDiv}>
                <div className={cl.redactDiv}></div>
                <div className={cl.deletDiv} onClick={() => onDelete(card.id)} ></div>
            </div>
        </div>
    )
}

export default Card
