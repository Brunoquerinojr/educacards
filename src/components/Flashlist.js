import React from 'react'
import Flashcard from './Flashcard'

// Este componente recebe uma propriedade chamada flashcards, que é um array de objetos representando os flashcards a serem exibidos.
export default function Flashlist({ flashcards }) {
  return (
    <div className='card_center'>
      {/* Para cada flashcard no array, é renderizado um componente <Flashcard>, passando o flashcard como propriedade (flashcard={flashcard}) e uma chave (key={flashcard.id}) para ajudar o React a identificar cada elemento na lista. */}
        { flashcards.map(flashcard => {
            return <Flashcard flashcard={flashcard} key={flashcard.id} />
        } )}
    </div>
  )
}