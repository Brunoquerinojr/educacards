import React from 'react'
import Flashcard from './Flashcard'

export default function Flashlist({ flashcards }) {
  return (
    <div className='card_center'>
        { flashcards.map(flashcard => {
            return <Flashcard flashcard={flashcard} key={flashcard.id} />
        } )}
    </div>
  )
}
