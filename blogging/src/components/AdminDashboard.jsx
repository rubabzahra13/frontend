// AdminDashboard.js

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import UserManagement from './UserManagement';
import BlogManagement from './BlogManagement';

const AdminDashboard = () => {
  const [selectedPage, setSelectedPage] = useState('UserManagement');

  const styles = {
    container: {
      padding: '20px',
    },
    navigation: {
      marginBottom: '20px',
    },
    link: {
      marginRight: '20px',
      textDecoration: 'none',
      fontSize: '18px',
    },
    activeLink: {
      color: 'blue',
    },
  };

  return (
      <div style={styles.container}>
        <div style={styles.navigation}>
          <Link
            to="/AdminDashboard/UserManagement"
            style={{ ...styles.link, ...(selectedPage === 'UserManagement' && styles.activeLink) }}
            onClick={() => setSelectedPage('UserManagement')}
          >
            User Management
          </Link>
          <Link
            to="/AdminDashboard/BlogManagement"
            style={{ ...styles.link, ...(selectedPage === 'BlogManagement' && styles.activeLink) }}
            onClick={() => setSelectedPage('BlogManagement')}
          >
            Blog Management
          </Link>
        </div>
        <Routes>
          <Route path="/UserManagement" element={<UserManagement />} />
          <Route path="/BlogManagement" element={<BlogManagement />} />
        </Routes>
      </div>
  );
};

export default AdminDashboard;
