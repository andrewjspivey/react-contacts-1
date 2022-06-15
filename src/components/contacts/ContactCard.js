import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "./ContactCard.module.css";
import { useContext } from "react";
import ContactContext from "../../contexts/ContactContext";
import { useState } from "react";

const ContactCard = ({
  id,
  firstName = "",
  lastName = "",
  phoneNumber = "",
  profilePic = "",
  onClick,
}) => {
  const [boolean, setBool] = useState(false);
  const { removeContact } = useContext(ContactContext);

  return (
    <div>
      <Container
        style={{ zIndex: "5" }}
        className={styles.container}
        //   onClick={onClick}
        onClick={() => setBool(!boolean)}
      >
        <Row className={styles.row}>
          <Col className={styles.img}>
            <img
              src={profilePic}
              alt={`Profile of ${firstName} ${lastName}.`}
            />
          </Col>
          <Col className={styles.info}>
            <p>
              {firstName} {lastName}
            </p>
            <p>{phoneNumber}</p>
          </Col>
          <Col className={styles.button}>
            <button
              style={{ zIndex: "10", width: "40px" }}
              className="rounded-circle font-weight-bold"
              onClick={() => removeContact(id)}
            >
              X
            </button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactCard;
