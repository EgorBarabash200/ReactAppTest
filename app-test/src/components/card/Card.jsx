import React,{ useState } from 'react'
import cl from './Card.module.css'
import EditedCard from '../editedCard/EditedCard'
const Card = ({ card, onDelete, onEdit }) => {
    const [isOpen, setOpen] = useState(false);
    const [editedCard, setEditedCard] = useState({ ...card });

    const getBackgroundColor = () => {
        const jobValue = isOpen ? editedCard.jobPosition : card.jobPosition;
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
        const jobName = isOpen ? editedCard.jobPosition : card.jobPosition;
        switch (jobName) {
            case 'employee':
                return 'Сотрудник';
            case 'develop':
                return 'Девелоп';
            case 'admin':
                return 'Администратор'
        }
    }
    const appendChange = async () => {
        const { name, phone, jobPosition } = card;
        const data = {
            name: editedCard.name,
            phone: editedCard.phone,
            jobPosition: editedCard.jobPosition
        }
        onEdit(card.id, data);
        setOpen(false)
    }
     const handleCancel = () => {
        setEditedCard({ ...card });
        setOpen(false);
    }
    return (
        <div style={{ backgroundColor: getBackgroundColor() }} className={cl.mainDiv}>
            <div className={cl.textDiv}>
                {isOpen ? (
                    <EditedCard 
                        editedCard={editedCard}
                        setEditedCard={setEditedCard}
                        onSave={appendChange}
                        onCancel={handleCancel}
                    />
                ) : (
                    <>
                        <p>Имя: {card.name}</p>
                        <p>Телефон: {card.phoneCode} {card.phone}</p>
                        <p>Должность: {jobSelectName()}</p>
                    </>
                )}
            </div>
            
            <div className={cl.imgDiv}>
                {!isOpen && (
                    <>
                        <div
                            className={cl.redactDiv}
                            onClick={() => setOpen(true)}
                            title="Редактировать"
                        ></div>
                        <div
                            className={cl.deletDiv}
                            onClick={() => onDelete(card.id)}
                            title="Удалить"
                        ></div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Card
