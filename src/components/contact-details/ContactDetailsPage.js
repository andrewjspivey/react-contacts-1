import ContactDetailsCard from "./ContactDetailsCard";
import {useParams} from 'react-router-dom'
import {useContacts} from '../../contexts/ContactContext'


const ContactDetailsPage = () => {
    
    const { index } = useParams();
    const { contacts }= useContacts();
    const contactIndex = parseInt(index);
    const isValidIndex = (!isNaN(contactIndex)) && (contactIndex >= 0) && (contactIndex < contacts.length)


    return (
        <div>
            {isValidIndex
                ? <ContactDetailsCard contact={contacts[contactIndex]} />
                : <div>404 Page not found</div>
            }
        </div>
    )
}

export default ContactDetailsPage;