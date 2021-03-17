import styled from 'styled-components'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'




const ContactCard = ({ firstName='', lastName='', phoneNumber='', profilePic='' }) => {
    return (
        <Container>
            <Row className='d-flex align items-center shadow'>
            <Col>
                <img className='rounded-circle' src={profilePic} alt={`Profile of ${firstName} ${lastName}.`} />
            </Col>
            <Col>
                <p>{firstName} {lastName}</p>
                <p>{phoneNumber}</p>
            </Col>
            <Col>
                <button>x</button>
            </Col>
            </Row>
        </Container>
    )
}

export default ContactCard;