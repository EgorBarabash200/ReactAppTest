import React from 'react'
import InputName from '../ui/inputName/InputName';
import SelectCard from '../ui/select/SelectCard';
import CardButton from '../ui/button/CardButton';
import cl from './EditedCard.module.css'
const EditedCard = ({
  editedCard,
  setEditedCard,
  onSave,
  onCancel
}) => {
  return (
    <>
      <p style={{ marginTop: '7px' }}>
        Имя: <InputName
          value={editedCard.name}
          onChange={e => setEditedCard({ ...editedCard, name: e.target.value })}
          type="text"
          placeholder="Имя"
        />
      </p>
      <p>
        Телефон: <InputName
          value={editedCard.phone}
          onChange={e => setEditedCard({ ...editedCard, phone: e.target.value })}
          type="number"
          placeholder="Телефон"
        />
      </p>
      <p>
        Должность:
        <SelectCard
          value={editedCard.jobPosition}
          onChange={selectedOption => setEditedCard({
            ...editedCard,
            jobPosition: selectedOption.value
          })}
          options={[
            { value: 'employee', job: 'Сотрудник' },
            { value: 'develop', job: 'Девелоп' },
            { value: 'admin', job: 'Администратор' },
          ]}
        />
      </p>

      <div className={cl.buttonGroup}>
        <CardButton
          className={cl.saveButton}
          style={{ width: '20%' }}
          onClick={onSave}
          title="Сохранить"
        >✓</CardButton>
        <CardButton
          className={cl.cancleButton}
          style={{ width: '20%' }}
          onClick={onCancel}
          title="Отменить"
        >✕</CardButton>
      </div>
    </>
  );
};

export default EditedCard
