import React from 'react'
import Card from '../Card/Card'

function List(props) {
  console.log('List:',props)
  let cards = props.cards.map(card =>
    <Card key={props.id} title={card.title} content={card.content} />)

  return (
    <section className="List">
        <header className="List-cards">
            <h2>{props.header}</h2>
          </header>
        <div className="List-cards">{cards}</div>
    </section>
  )
}

export default List
