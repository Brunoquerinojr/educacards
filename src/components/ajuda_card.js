import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './ajuda.css'
import Icon from './img/icon.png'

function Ajuda_card() {
  return (
    <div className='main'>
        <div className='Container'> {/* added maxWidth prop */}
            <div className='--div-container'>
                <div className='div-staps1'>
                  <Row className='staps'>
                    <Col className='col-border'>1° Passo: Selecionar a categoria que gostaria de estudar</Col>
                    <Col>3 Passo: Clique em "Ver Resposta" para o card girar e sua resposta aparecerá</Col>
                  </Row>
                </div>
                <div className='div-staps2'>
                  <Row className='staps'>
                    <Col className='col-border'>2° Passo: Clique em "gerar" e espere a pergunta aparecer</Col>
                    <Col className='col-img'><img src={Icon} alt="Logo" /></Col>
                  </Row>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Ajuda_card;