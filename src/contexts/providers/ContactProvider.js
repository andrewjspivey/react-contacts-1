
import { useState, useEffect } from "react"

import { addContact, deleteContact, getContacts } from '../../utils/contacts';
import ContactContext from "../ContactContext";

const ContactProvider = ({ children }) => {

    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        // Fetch contacts stored in localStorage.
        const storedContacts = getContacts();
        setContacts(storedContacts)

    }, [JSON.stringify(contacts)]);


    const addNewContact = ({ firstName, lastName, profilePic, phoneNumber, email, address }) => {
        const newContact = addContact({ firstName, lastName, profilePic, phoneNumber, email, address });
        setContacts([...contacts, newContact]);
    }

    const removeContactById = (id) => {
        // This funciton is coming from the utility functions in utils/contacts.js
        // and it deletes the contacts save in the localStorage of the browser.
        deleteContact(id);

        // We still need to update the local state in the component. We'll just filter
        // out the contact with the specified id.
        const filteredContacts = contacts.filter(contact => contact.id !== id);
        setContacts(filteredContacts);
    }

    return (
        <ContactContext.Provider value={{ contacts, addContact: addNewContact, removeContact: removeContactById }}>
            {children}
        </ContactContext.Provider>
    );
}

export default ContactProvider;




