<<<<<<< HEAD
// import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import NavBar from './components/navbar';

function BrandExample() {
  return (
    <>

      <NavBar/>
          
      {/* <Navbar bg="dark" data-bs-theme="dark" className="bg-body-tertiary">
       <Container>
           <Navbar.Brand href="#home" className='nav'>
            <img src="" alt="Seta de voltar" />
             <h1>Navbar</h1>
             <img
              alt=""
               src="/img/Header.svg"
               width="30"
               height="30"
             className="d-inline-block align-top"
             />{' '}
         </Navbar.Brand>
       </Container>
       </Navbar> */}
      
    </>
  );
}


// export default ColorSchemesExample;
  import { useState, useEffect, useRef } from 'react';
  import Container from 'react-bootstrap/Container';
  import Nav from 'react-bootstrap/Nav';
  import Navbar from 'react-bootstrap/Navbar';
  import Flashcard from './components/Flashcard';
  import Flashlist from './components/Flashlist';
  import './App.css'
  import axios from 'axios';
=======
import Interface from "./components/interface"
import MyRoutes from "./components/routes"
>>>>>>> afb9f988f28fc63bf90e9b5357dbf0454c3e5a86

function App() {
  return(
    <>
      <MyRoutes/>
    </>
  )
}

<<<<<<< HEAD
    useEffect(() => {
      axios.get("https://opentdb.com/api_category.php")
      .then(res => {
        setCategories(res.data.trivia_categories)
      })
    }, [])

    function decodeString(str) {
      const textArea = document.createElement('textarea')
      textArea.innerHTML= str
      return textArea.value
    }

    function handleSubmit (e) {
      e.preventDefault();
        axios.get("https://opentdb.com/api.php?amount=1", {
          params: {
            category: categoryEl.current.value
          }
        })
        .then(res => {
          setFlashcards(res.data.results.map((questionItem, index) => {
            return {
              id: `${index}-${Date.now()}`,
              pergunta: decodeString(questionItem.question),
              resposta: decodeString(questionItem.correct_answer)
            }
          }))
        })
      }
    
    return (
      <>
        <Navbar data-bs-theme="success" className='header'>
          <Container>
            <Navbar.Brand href="#home">EducaCards</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        <form className='forms' onSubmit={handleSubmit}>
          <div className='form-group'>
            <label htmlFor="category">Categorias</label>
            <select id="category" ref={categoryEl}>
              {categories.map(category => {
                return <option value={category.id} key={category.id}>{category.name}</option>
              })}
            </select>
          </div>
          <div className='form-group'>
            <button className='btn'>Gerar</button>
          </div>
        </form>

        <Flashlist flashcards = {flashcards} />

      </>

    );
  }


  const FlashCards_Simples = [
    {
      id: 1,
      pergunta: "Quanto é 1 + 1?",
      resposta: "2"
    }
  ]

  export default ColorSchemesExample;
=======
export default App
>>>>>>> afb9f988f28fc63bf90e9b5357dbf0454c3e5a86
