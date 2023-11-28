// EditProfile.js

import React, { useState } from 'react';

import backgroundImage from './images/bg.jpg';

const EditProfile = ({ user, onSave }) => {
  const [profileDetails, setProfileDetails] = useState({
    shareProfile: user.shareProfile,
    email: user.email,
    username: user.username,
    password: user.password,
    profileImage: user.profileImage, // Add profileImage to state
  });

  const handleChange = (event) => {
    const { name, value, type, checked, files } = event.target;

    // Check if the input is a file (profile image)
    const newValue = type === 'file' ? files[0] : type === 'checkbox' ? checked : value;

    setProfileDetails({
      ...profileDetails,
      [name]: newValue,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSave(profileDetails);
  };

  const styles = {
    container: {
      backgroundImage: `url(${backgroundImage})`, // Background image
      backgroundSize: 'cover',
      minHeight: '100vh', 
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    editProfileContainer: {
      display: 'flex',
      flexDirection: 'column',
      maxWidth: '400px',
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '8px',
      backgroundColor: '#fff',
    },
    profileEditForm: {
      display: 'flex',
      flexDirection: 'column',
    },
    labelContainer: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '10px',
    },
    checkboxLabel: {
      marginLeft: '10px',
    },
    inputField: {
      width: '100%',
      padding: '10px',
      marginBottom: '15px',
      border: '1px solid #ccc',
      borderRadius: '4px',
    },
    submitButton: {
      backgroundColor: '#3C4EF1',
      color: '#fff',
      padding: '10px',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
    },
    submitButtonHover: {
      backgroundColor: '#2a3a9d',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.editProfileContainer}>
        <h2>Edit User Profile</h2>
        <form onSubmit={handleSubmit} style={styles.profileEditForm}>
          <label>
            Profile Image:
            <input type="file" name="profileImage" accept="image/*" onChange={handleChange} style={styles.inputField} />
          </label>
          <label>
            Username:
            <input type="text" name="username" value={profileDetails.username} onChange={handleChange} style={styles.inputField} />
          </label>
          <label>
            Email address:
            <input type="email" name="email" value={profileDetails.email} onChange={handleChange} style={styles.inputField} />
          </label>
          <label>
            Password:
            <input type="text" name="password" value={profileDetails.password} onChange={handleChange} style={styles.inputField} />
          </label>
          <div style={styles.labelContainer}>
            <label>
              Share my profile:
              <input
                type="checkbox"
                name="shareProfile"
                checked={profileDetails.shareProfile}
                onChange={handleChange}
              />
            </label>
            <span style={styles.checkboxLabel}>(Share your profile)</span>
          </div>
          <button
            type="submit"
            style={styles.submitButton}
            onMouseEnter={() => styles.submitButton.backgroundColor = styles.submitButtonHover.backgroundColor}
            onMouseLeave={() => styles.submitButton.backgroundColor = '#3C4EF1'}
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
