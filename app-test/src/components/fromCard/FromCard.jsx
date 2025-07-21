import React, { useState } from 'react'
import cl from './FromCard.module.css'
import CardButton from '../ui/button/CardButton'
import InputPhone from '../ui/inputPhone/InputPhone'
import InputName from '../ui/inputName/InputName'
import SelectCard from '../ui/select/SelectCard'
import { postCreateCards } from "../../API/CardServis";
const FromCard = ({ create }) => {
  const [formCard, setFormCard] = useState({ name: '', phone: '', phoneCode: '+7', jobPostion: null });
  const addNewCard = () => {
    const newCard = {
      ...formCard, id: Date.now()
    }
   // postCreateCards(newCard);
    create(newCard);
    setFormCard({ name: '', phone: '', phoneCode: '+7', jobPostion: null });
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
        valueCode={formCard.phoneCode}
        onChange={e => setFormCard({ ...formCard, phone: e.target.value })}
        onChangeCode={e => setFormCard({ ...formCard, phoneCode: e.target.value })}
        type="number"
        placeholder="Телефон"
      />
      <SelectCard
        value={formCard.jobPostion?.value || ""}
        onChange={selectedOption => setFormCard({ ...formCard, jobPostion: selectedOption })}
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