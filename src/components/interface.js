  import { useState, useEffect, useRef } from 'react';
  import Container from 'react-bootstrap/Container';
  import Nav from 'react-bootstrap/Nav';
  import Navbar from 'react-bootstrap/Navbar';
  import Flashcard from './Flashcard';
  import Flashlist from './Flashlist';
  import '../App.css'
  import axios from 'axios';
  import NavBar from './navbar';
  import Logo_branco from './img/logo_branco.png'
  import { Link } from 'react-router-dom';

  function Interface() {
    const [flashcards, setFlashcards] = useState(FlashCards_Simples)
    const [categories, setCategories] = useState([])
    const categoryEl = useRef()

    // Obter categorias que a API proporciona
    useEffect(() => {
      axios.get("https://opentdb.com/api_category.php")
      .then(res => {
        setCategories(res.data.trivia_categories)
      })
    }, [])

    // Decodifica o HTML, tirando caracteres indesejados como: &, $quot 
      function decodeString(str) {
        const textArea = document.createElement('textarea')
        textArea.innerHTML= str
        return textArea.value
      }

      function handleSubmit (e) {
      // Não recarrega a página ao recarregar o envio do formulário
      e.preventDefault();
      // Envio da solitação à API para receber 1 pergunta da categoria selecionada
        axios.get("https://opentdb.com/api.php?amount=1", {
          // Categoria selecionada no categoryEl (elemento select do html)
          params: {
            category: categoryEl.current.value
          }
        })
        // quando o método GET for bem sucedido retornará essa função
        .then(res => {
          // array com as perguntas e respostas/ com a função map é criado um objeto com as classes (id, pergunta e resposta) para cada item do array
          setFlashcards(res.data.results.map((questionItem, index) => {
            return {
              // id: Um identificador único gerado concatenando o índice atual com o timestamp atual (Date.now()).
              id: `${index}-${Date.now()}`,
              pergunta: decodeString(questionItem.question),
              resposta: decodeString(questionItem.correct_answer)
            }
          }))
        })
      }
    
    return (
      <>
        <NavBar />

        <form className='forms' onSubmit={handleSubmit}>
          <div className='form-group'>
            <label htmlFor="category">Categorias</label>
            <select id="category" ref={categoryEl}>
              {/* mapeado cada categoria disponível (obtida pela chamada à API) */}
              {categories.map(category => {
                // Isso cria uma lista de opções que o usuário pode selecionar no campo de seleção.
                return <option value={category.id} key={category.id}>{category.name}</option>
              })}
            </select>
          </div>
          <div className='form-group'>
            <button className='btn'>Gerar</button>
          </div>
        </form>

        <Flashlist flashcards = {flashcards} />

        <div className='QuestionMark'>
        <Link to="/Ajuda">?</Link>
        </div>

      </>

    );
  }


  const FlashCards_Simples = [
    {
      id: 1,
      pergunta: <img src={Logo_branco} alt="Logo" />,
      resposta: "Não foi gerado nenhuma resposta"
    }
  ]

  export default Interface;