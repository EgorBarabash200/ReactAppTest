import React, { useState } from 'react'
import cl from './FromCard.module.css'
import CardButton from '../ui/button/CardButton'
import InputPhone from '../ui/inputPhone/InputPhone'
import InputName from '../ui/inputName/InputName'
import SelectCard from '../ui/select/SelectCard'

const FromCard = ({ create }) => {
  const [formCard, setFormCard] = useState({ name: '', phone: '+7', jobPost: null });
  const addNewCard = () => {
    const newCard = {
      ...formCard, id: Date.now()
    }
    create(newCard);
    setFormCard({ name: '', phone: '', jobPost: null });
  }
  return (
    <div className={cl.createContainer}>
      <InputName
        value={formCard.name}
        onChange={e => setFormCard({ ...formCard, name: e.target.value })}
        type="text"
        placeholder="Имя"
      />
      <InputPhone
        value={formCard.phone}
        onChange={e => setFormCard({ ...formCard, phone: e.target.value })}
        type="number"
        placeholder="Телефон"
      />
      <SelectCard
        value={formCard.jobPosition?.value || ""}
        onChange={selectedOption => setFormCard({ ...formCard, jobPosition: selectedOption })}
        defaultValue='Должность'
        options={[
          { value: 'employee', job: 'Сотрудник' },
          { value: 'develop', job: 'Девелоп' },
          { value: 'admin', job: 'Администратор' },
        ]}
      />
      <CardButton onClick={addNewCard}>Добавить</CardButton>
    </div>
  )
}
export default FromCard