import { useState, useEffect } from "react";

import { addContact, deleteContact, getContacts } from "../../utils/contacts";
import ContactContext from "../ContactContext";

const ContactProvider = ({ children }) => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    // Fetch contacts stored in localStorage.
    const storedContacts = getContacts();
    setContacts(storedContacts);
  }, []);

  const addNewContact = ({
    firstName,
    lastName,
    profilePic,
    phoneNumber,
    email,
    address,
  }) => {
    const newContact = addContact({
      firstName,
      lastName,
      profilePic,
      phoneNumber,
      email,
      address,
    });
    setContacts([...contacts, newContact]);
  };

  const removeContactById = async (id) => {
    // This funciton is coming from the utility functions in utils/contacts.js
    // and it deletes the contacts save in the localStorage of the browser.
    let contacts = localStorage.getItem("contacts") ?? "[]";
    contacts = await JSON.parse(contacts);
    contacts = await contacts.filter((contact) => contact.id !== id);
    localStorage.setItem("contacts", JSON.stringify(contacts));

    // We still need to update the local state in the component. We'll just filter
    // out the contact with the specified id.
    const filteredContacts = await contacts.filter(
      (contact) => contact.id !== id
    );
    setContacts([...filteredContacts]);
  };

  return (
    <ContactContext.Provider
      value={{
        contacts,
        addContact: addNewContact,
        removeContact: removeContactById,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};

export default ContactProvider;
