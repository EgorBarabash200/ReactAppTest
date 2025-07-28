import React from 'react'
import Card from '../card/Card'
import cl from './ListCards.module.css'

const ListCards = ({ cards, onDeleteCard, onPutCard }) => {
  return (
    <div className={cl.listContainer}>
      {cards.map((item, index) =>
        <Card card={item} key={`${index}-card`} onDelete={onDeleteCard} onEdit={onPutCard} />
      )}
    </div>
  )
}

export default ListCards
