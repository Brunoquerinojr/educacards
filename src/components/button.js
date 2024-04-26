import React, { useState } from 'react'
import './button.css'

export default function Button({ onClick }) {
    const [flip, setFlip] = useState(false)
    const [buttonText, setButtonText] = useState('Ver resposta')

    const handleClick = (e) => {
        e.stopPropagation()
        setFlip(!flip)
        setButtonText(flip ? 'Ver resposta' : 'Ver pergunta')
        onClick()
      }

  return (
    <div className={`btn_div ${flip ? 'flip' : ''}`}>
        <div>
        <button className='btn' onClick={handleClick}>{buttonText}</button>
        </div>
    </div>
  )
}

