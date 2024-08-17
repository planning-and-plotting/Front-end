import React, { useState, useEffect } from 'react';
import axios from 'axios';
import backgroundImage from '../assets/for code.jpg'; // Ensure the path is correct

const AdminDashboard = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const token = localStorage.getItem('adminToken');
        const response = await axios.get('/api/admin/contacts', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setContacts(response.data);
      } catch (error) {
        console.error('Error fetching contacts:', error);
      }
    };

    fetchContacts();
  }, []);

  const pageStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    color: 'white',
    overflowY: 'auto',
  };

  const headerStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: '20px',
    borderRadius: '8px',
    marginBottom: '20px',
  };

  const listStyle = {
    width: '100%',
    maxWidth: '600px',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    borderRadius: '8px',
    padding: '20px',
    listStyleType: 'none',
  };

  const listItemStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    padding: '10px',
    borderRadius: '4px',
    marginBottom: '10px',
  };

  const textStyle = {
    margin: '5px 0',
  };

  return (
    <div style={pageStyle}>
      <h1 style={headerStyle}>Admin Dashboard</h1>
      <ul style={listStyle}>
        {contacts.map((contact) => (
          <li key={contact._id} style={listItemStyle}>
            <p style={textStyle}><strong>Name:</strong> {contact.name}</p>
            <p style={textStyle}><strong>Email:</strong> {contact.email}</p>
            <p style={textStyle}><strong>Message:</strong> {contact.message}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;
