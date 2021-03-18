import ContactCard from "./ContactCard"
import styled from "styled-components";

const ContactListContainer = styled.div`
    width: 80%;
    margin: 0 auto;
    background-color: lightgrey;
`;

const ContactList = ({ contacts=[] }) => {
    return (
        <ContactListContainer>
            {contacts.map((contact) => 
                <ContactCard 
                    key={contact.id}
                    firstName={contact.firstName} 
                    lastName={contact.lastName} 
                    phoneNumber={contact.phoneNumber} 
                    profilePic={contact.profilePic}
                />
            )}
        </ContactListContainer>
    )
}

export default ContactList;