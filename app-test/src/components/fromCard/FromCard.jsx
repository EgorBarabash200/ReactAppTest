import React, { useState } from 'react'
import cl from './FromCard.module.css'
import CardButton from '../ui/button/CardButton'
import InputPhone from '../ui/inputPhone/InputPhone'
import InputName from '../ui/inputName/InputName'
import SelectCard from '../ui/select/SelectCard'
import { postCreateCards } from "../../API/CardServis";
const FromCard = ({ setList }) => {
  const [formCard, setFormCard] = useState({ name: '', phone: '', phoneCode: '+7', jobPosition: null });
  const addNewCard = async () => {
    const newCard = {
      name: formCard.name,
      phone: formCard.phone,
      jobPosition: formCard.jobPosition.value,
    }
    const data = await postCreateCards(newCard);
    setList(data);
    setFormCard({ name: '', phone: '', phoneCode: '+7', jobPosition: null });
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