import React, { useState } from "react";


function ContactCreateForm(props) {
    
    const [firstName, setFirstname] = useState('')
    const [lastName, setLastName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAdress] = useState('')
    const [profilePic, setProfilePic] = useState('')

    

    function handleFirstNameChange(event) {
        setFirstname(event.target.value)
    }
    function handleLastnameChange(event) {
        setLastName(event.target.value)
    }
    function handlePhoneChange(event) {
        setPhoneNumber(event.target.value)
    }
    function handleEmailChange(event) {
        setEmail(event.target.value)
    }
    function handleAddressChange(event) {
        setAdress(event.target.value)
    }
    function handleProfilePicChange(event) {
        setProfilePic(event.target.value)
    }

    function handleFormSubmit(event) {
        event.preventDefault();
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
                            name="firstName"
                            value={firstName}
                            onChange={handleFirstNameChange}
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            placeholder="Last Name"
                            name="lastName"
                            value={lastName}
                            onChange={handleLastnameChange}
                        />
                    </div>
                    <div>
                        <input
                            type="tel"
                            placeholder="Phone Number"
                            name="phoneNumber"
                            value={phoneNumber}
                            onChange={handleLastnameChange}
                        />
                    </div>
                    <div>
                        <input
                            type="email"
                            placeholder="Email"
                            name="email"
                            value={email}
                            onChange={handleEmailChange}
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            placeholder="Address"
                            name="address"
                            value={address}
                            onChange={handleAddressChange}
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            placeholder="Profile Picture Url"
                            name="profilePic"
                            value={profilePic}
                            onChange={handleProfilePicChange}
                        />
                    </div>
                    <div>
                        <button type="submit">Add Contact</button>
                    </div>
                </div>
            </form>
        )
    }


export default ContactCreateForm;