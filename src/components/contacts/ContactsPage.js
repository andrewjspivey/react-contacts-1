import ContactsList from "./ContactsList";

import {Link} from 'react-router-dom'

const ContactsPage = ({ contacts=[] }) => {
    return (
        <div>
            <p>Have an account?<Link to="/login">Login</Link></p>
            <ContactsList contacts={contacts} />
        </div>
    )
}

export default ContactsPage;