import styled from 'styled-components'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styles from './ContactCard.module.css';



const ContactCard = ({ firstName='', lastName='', phoneNumber='', profilePic='' }) => {
    return (
        <Container className={styles.container}>
            <Row className={styles.row}>
            <Col className={styles.img}>
                <img src={profilePic} alt={`Profile of ${firstName} ${lastName}.`} />
            </Col>
            <Col className={styles.info}>
                <p>{firstName} {lastName}</p>
                <p>{phoneNumber}</p>
            </Col>
            <Col className={styles.button}>
                <button className="rounded-circle font-weight-bold">x</button>
            </Col>
            </Row>
        </Container>
    )
}

export default ContactCard;