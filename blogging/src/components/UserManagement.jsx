// UserManagement.js

import React, { useState } from 'react';

const UserManagement = () => {
  const [users, setUsers] = useState([
    { id: 1, username: 'john_doe', status: 'active' },
    { id: 2, username: 'jane_smith', status: 'active' },
    { id: 3, username: 'bob_johnson', status: 'active' },
  ]);

  const handleBlockUser = (userId) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === userId ? { ...user, status: 'disabled' } : user
      )
    );
  };

  const styles = {
    container: {
      marginTop: '20px',
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      marginTop: '10px',
    },
    th: {
      background: '#333',
      color: 'white',
      padding: '10px',
      textAlign: 'left',
    },
    td: {
      padding: '10px',
      borderBottom: '1px solid #ddd',
    },
    active: {
      color: 'green',
      fontWeight: 'bold',
    },
    disabled: {
      color: 'red',
      fontWeight: 'bold',
    },
  };

  return (
    <div style={styles.container}>
      <h2>User Management</h2>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>User ID</th>
            <th style={styles.th}>Username</th>
            <th style={styles.th}>Status</th>
            <th style={styles.th}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td style={styles.td}>{user.id}</td>
              <td style={styles.td}>{user.username}</td>
              <td style={styles.td}>
                {user.status === 'active' ? (
                  <span style={styles.active}>Active</span>
                ) : (
                  <span style={styles.disabled}>Disabled</span>
                )}
              </td>
              <td style={styles.td}>
                {user.status === 'active' && (
                  <button onClick={() => handleBlockUser(user.id)}>
                    Block
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserManagement;
