import React, { useState } from 'react'
import cl from './FromCard.module.css'
import Input from '../ui/input/Input'
import Select from '../ui/select/Select'
import CardButton from '../ui/button/CardButton'

const FromCard = ({ create }) => {
  const [formCard, setFormCard] = useState({ name: '', phone: '', jobPost: null });
  const addNewCard = () => {
    const newCard = {
      ...formCard, id: Date.now()
    }
    create(newCard);
    setFormCard({ name: '', phone: '', jobPost: null });
  }
  return (
    <div className={cl.createContainer}>
      <Input
        value={formCard.name}
        onChange={e => setFormCard({ ...formCard, name: e.target.value })}
        type="text"
        placeholder="Имя"
      />
      <Input
        value={formCard.phone}
        onChange={e => setFormCard({ ...formCard, phone: e.target.value })}
        type="number"
        placeholder="Телефон"
      />
      <Select
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