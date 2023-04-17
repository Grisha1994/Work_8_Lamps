import React from 'react'
import Current from '../Current/Current'
import s from "./style.module.css"


export default function CardsCurrent({cards}) {

  return (
    <div className={s.lamps}>
      {
        cards.map(el => <Current {...el} key={el.id}/>)
      }
    </div>
  )
}
