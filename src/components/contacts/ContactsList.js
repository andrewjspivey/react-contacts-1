import { useContext } from 'react';
import { useHistory } from 'react-router';
import styled from "styled-components";
import ContactContext from '../../contexts/ContactContext';
import ContactCard from "./ContactCard"

const ContactListContainer = styled.div`
    width: 80%;
    margin: 0 auto;
    background-color: lightgrey;
`;

const ContactList = () => {

    const { contacts } = useContext(ContactContext);
    const history = useHistory();

    return (
        <ContactListContainer>
            {contacts.map((contact, index) => 
                <ContactCard 
                    key={contact.id}
                    firstName={contact.firstName} 
                    lastName={contact.lastName} 
                    phoneNumber={contact.phoneNumber} 
                    profilePic={contact.profilePic}
                    onClick={() => history.push(`/contacts/${index}`)}
                />
            )}
        </ContactListContainer>
    )
}

export default ContactList;