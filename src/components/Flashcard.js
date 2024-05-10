import React, { useState } from 'react'
import './Flashcard.css'
import Button from './button'


export default function Flashcard({ flashcard}) {
  const [flip, setFlip] = useState(false)

  return (
    <div>
      <div className={`card ${flip ? 'flip' : ''}`}>
        <div className='frente'>
          {flashcard.pergunta}
        </div>
        <div className='atrás'>
          {flashcard.resposta}
        </div>
      </div>
      
        <div>
          <Button onClick={() => setFlip(!flip)} />
        </div>
    </div>
    
  )
}
