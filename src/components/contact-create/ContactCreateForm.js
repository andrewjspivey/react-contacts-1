import React, { useState, useContext } from "react";
import ContactContext from "../../contexts/ContactContext";

const ContactCreateForm = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [profilePic, setProfilePic] = useState('');

    const { addContact } = useContext(ContactContext);


    const handleFormSubmit = (event) => {
        event.preventDefault();

        addContact({
            firstName,
            lastName,
            phoneNumber,
            email,
            address,
            profilePic
        });
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <div>
                <img src={profilePic} alt="Profile preview." />
            </div>
            <div>
                <div>
                    <input
                        type="text"
                        placeholder="First Name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Last Name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </div>
                <div>
                    <input
                        type="tel"
                        placeholder="Phone Number"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                </div>
                <div>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Profile Picture Url"
                        value={profilePic}
                        onChange={(e) => setProfilePic(e.target.value)}
                    />
                </div>
                <div>
                    <button type="submit">Add Contact</button>
                </div>
            </div>
        </form>
    );
}

export default ContactCreateForm;