import ContactsList from "./ContactsList";

import {useParams} from 'react-router-dom'

const ContactsPage = ({ contacts=[] }) => {
    return <ContactsList contacts={contacts} />
}

export default ContactsPage;