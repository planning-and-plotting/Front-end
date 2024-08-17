import React, { useState } from 'react';
import axios from 'axios';
import backgroundImage from '../assets/for code.jpg'; // Ensure the path is correct

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/login', { username, password });
      localStorage.setItem('adminToken', response.data.token); // Consider security best practices for token storage
      alert('Login successful');
      window.location.href = '/admin-dashboard'; // Adjust the path as necessary
    } catch (error) {
      console.error('Error logging in:', error);
      if (error.response) {
        setError(error.response.data.message || 'Login failed');
      } else if (error.request) {
        setError('No response from server');
      } else {
        setError('Error logging in');
      }
    }
  };

  const pageStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    width: '100vw',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const formStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.9)', // Slightly more opaque for better readability
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 0 15px rgba(0, 0, 0, 0.2)',
    width: '300px',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    marginBottom: '15px', // Increased margin for better spacing
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '16px', // Increased font size for better readability
  };

  const buttonStyle = {
    width: '100%',
    padding: '10px',
    borderRadius: '4px',
    border: 'none',
    backgroundColor: '#4CAF50',
    color: 'white',
    fontSize: '18px', // Increased font size for better readability
    cursor: 'pointer',
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '5px',
    fontSize: '16px', // Increased font size for better readability
  };

  const errorStyle = {
    color: 'red',
    marginBottom: '15px', // Increased margin for better spacing
    fontSize: '14px', // Consistent font size
  };

  return (
    <div style={pageStyle}>
      <form onSubmit={handleSubmit} style={formStyle}>
        <div>
          <label style={labelStyle}>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            style={inputStyle}
          />
        </div>
        <div>
          <label style={labelStyle}>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={inputStyle}
          />
        </div>
        {error && <div style={errorStyle}>{error}</div>}
        <button type="submit" style={buttonStyle}>Login</button>
      </form>
    </div>
  );
};

export default AdminLogin;
