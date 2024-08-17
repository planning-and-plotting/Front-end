import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AdminLogin from './components/AdminLogin';
import AdminDashboard from './components/AdminDashboard';
import Contact from './components/pages/Contact';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Contact />} />
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/admin/dashboard" element={<AdminDashboard />} />
    </Routes>
  );
};

export default App;
