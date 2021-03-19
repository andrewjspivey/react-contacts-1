
import { createContext, useContext } from 'react';

const ContactContext = createContext();
ContactContext.displayName = 'ContactContext';

export const useContacts = () => useContext(ContactContext);

export default ContactContext;