import React from 'react'
import s from "./style.module.css"
import CardsCurrent from '../CardsCurrent/CardsCurrent'

export default function CurrentSpecials({cards}) {
  return (
    <div className={s.wrapper_offer}>
        
         <h1>Актуальные спецпредложения</h1>   
        
        <CardsCurrent cards={cards}/>
    </div>
  )
}
