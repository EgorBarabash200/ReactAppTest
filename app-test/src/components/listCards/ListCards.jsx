import React from 'react'
import Card from '../card/Card'
import cl from './ListCards.module.css'

const ListCards = ({ cards }) => {
  return (
    <div className={cl.listContainer}>
      {cards.map((item, index) =>
        <Card cards={item} key={`${index}-card`} />
      )}
    </div>
  )
}

export default ListCards
