import { v4 as uuidv4 } from 'uuid';

const mockContacts = [
    {
        "id": 1,
        "firstName": "Culley",
        "lastName": "Snelman",
        "profilePic": "https://i.pravatar.cc/300?u=1",
        "phoneNumber": "351-346-6140",
        "email": "csnelman0@blog.com",
        "address": "09 Eggendart Parkway"
    }, {
        "id": 2,
        "firstName": "Tammara",
        "lastName": "Allcorn",
        "profilePic": "https://i.pravatar.cc/300?u=2",
        "phoneNumber": "676-783-9239",
        "email": "tallcorn1@senate.gov",
        "address": "78145 Brentwood Court"
    }, {
        "id": 3,
        "firstName": "Cassandry",
        "lastName": "Roze",
        "profilePic": "https://i.pravatar.cc/300?u=3",
        "phoneNumber": "223-879-6692",
        "email": "croze2@w3.org",
        "address": "2079 Morrow Parkway"
    }, {
        "id": 4,
        "firstName": "Koressa",
        "lastName": "Galey",
        "profilePic": "https://i.pravatar.cc/300?u=4",
        "phoneNumber": "761-858-5580",
        "email": "kgalaey3@economist.com",
        "address": "5 Hanover Alley"
    }
];

const seedContacts = () => {
    mockContacts.forEach(contact => addContact(contact));
};

export const getContacts = () => {
    const contacts = localStorage.getItem('contacts');

    if (!contacts) {
        seedContacts();
        return mockContacts;
    }

    return JSON.parse(contacts);
}

export const addContact = ({ firstName, lastName, phoneNumber, email, address, profilePic }) => {
    let contacts = localStorage.getItem('contacts') ?? '[]';
    contacts = JSON.parse(contacts)

    const newContact = {
        id: uuidv4(),
        firstName,
        lastName,
        phoneNumber,
        email,
        address,
        profilePic
    };

    contacts.push(newContact);
    localStorage.setItem('contacts', JSON.stringify(contacts));

    return newContact;
}

export const deleteContact = (id) => {
    let contacts = localStorage.getItem('contacts') ?? '[]';
    contacts = JSON.parse(contacts)
    contacts = contacts.filter((contact) => contact.id !== id);
    localStorage.setItem('contacts', JSON.stringify(contacts));
}