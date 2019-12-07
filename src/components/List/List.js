import React from 'react'
import Card from '../Card/Card'
import './List.css'

function List(props) {
  console.log('List:',props)
  let cards = props.cards.map(card =>
    <Card key={card.id} title={card.title} content={card.content} />)

  return (
    <section className="List">
        <header className="List-header">
            <h2>{props.header}</h2>
          </header>
        <div className="List-cards">{cards}</div>
    </section>
  )
}

export default List
