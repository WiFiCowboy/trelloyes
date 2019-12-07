import React from 'react'

export default function Card(props) {
  console.log('card:',props)
  return (
    <div className="Card">
      <h3>{props.title}</h3>
      <p>{props.content}</p>
    </div>
  )
}
