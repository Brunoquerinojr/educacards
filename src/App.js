import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ColorSchemesExample() {
  return (
    <>
      <Navbar data-bs-theme="sucess" className='header'>
        <Container>
          <Navbar.Brand href="#home">EducaCards</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

    </>
  );
}

export default ColorSchemesExample;