import { useState, useEffect } from 'react';
import { FaEdit } from "react-icons/fa";
import { FaSave } from "react-icons/fa";
import './My-profile.css'

const UserProfile = () => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: ""
  });

  const [editedFirstName, setEditedFirstName] = useState("");
  const [editedLastName, setEditedLastName] = useState("");
  const [editedPhoneNumber, setEditedPhoneNumber] = useState("");

  useEffect(() => {
    fetchUserProfile();
  }, []);

  const fetchUserProfile = async () => {
    try {
      const response = await fetch('api');
      if (!response.ok) {
        throw new Error('Failed to fetch user profile data');
      }
      const userDataFromApi = await response.json();
      setUserData(userDataFromApi);
    } catch (error) {
      console.error('Error fetching user profile data:', error);
    }
  };

  const handleEditFirstName = () => {
    setEditedFirstName(userData.firstName);
  };

  
  const handleSaveFirstName = async () => {
    try {
      const response = await fetch('api-endpoint', {
        method: 'PUT', 
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ firstName: editedFirstName })
      });
      if (!response.ok) {
        throw new Error('Failed to save first name');
      }
      setUserData({ ...userData, firstName: editedFirstName });
      setEditedFirstName("");
    } catch (error) {
      console.error('Error saving first name:', error);
    }
  };

  
  const handleEditLastName = () => {
    setEditedLastName(userData.lastName);
  };

  
  const handleSaveLastName = async () => {
    try {
      const response = await fetch('api', {
        method: 'PUT', 
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ lastName: editedLastName })
      });
      if (!response.ok) {
        throw new Error('Failed to save first name');
      }
      setUserData({ ...userData, lastName: editedLastName });
      setEditedLastName("");
    } catch (error) {
      console.error('Error saving last name:', error);
    }
  };

  
  const handleEditPhoneNumber = () => {
    setEditedPhoneNumber(userData.phoneNumber);
  };
  

  const handleSavePhoneNumber = async () => {
    try {
      const response = await fetch('api', {
        method: 'PUT', 
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ phoneNumber: editedPhoneNumber })
      });
      if (!response.ok) {
        throw new Error('Failed to save first name');
      }
      setUserData({ ...userData, phoneNumber: editedPhoneNumber });
      setEditedPhoneNumber("");
    } catch (error) {
      console.error('Error saving Phonenumber:', error);
    }
  };

  return (
    <div className="container">
      <h1>User Profile</h1>
      <div className="form-group-profile">
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          value={editedFirstName || userData.firstName}
          onChange={(e) => setEditedFirstName(e.target.value)}
          readOnly={!editedFirstName}
        />
        {editedFirstName ? (
          <button className='save-button' onClick={handleSaveFirstName}><FaSave /></button>
        ) : (
          <button className='edit-button' onClick={handleEditFirstName}><FaEdit /></button>
        )}
      </div>
      <div className="form-group-profile">
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          value={editedLastName || userData.lastName}
          onChange={(e) => setEditedLastName(e.target.value)}
          readOnly={!editedLastName}
        />
        {editedLastName ? (
          <button className='save-button' onClick={handleSaveLastName}><FaSave /></button>
        ) : (
          <button className='edit-button' onClick={handleEditLastName}><FaEdit /></button>
        )}
      </div>
      <div className="form-group-profile">
        <label htmlFor="email">Email:</label>
        <input className='Email-input'
          type="email"
          id="email"
          value={userData.email}
          readOnly
        />
      </div>
      <div className="form-group-profile">
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="tel"
          id="phoneNumber"
          value={editedPhoneNumber || userData.phoneNumber}
          onChange={(e) => setEditedPhoneNumber(e.target.value)}
          readOnly={!editedPhoneNumber}
        />
        {editedPhoneNumber ? (
          <button className='save-button' onClick={handleSavePhoneNumber}><FaSave /></button>
        ) : (
          <button className='edit-button' onClick={handleEditPhoneNumber}><FaEdit /></button>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
