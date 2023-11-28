import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/login';
import Signup from './components/signup';
import UserProfile from './components/userprofile';
import EditProfile from './components/editprofile';


import './App.css';
import HomePage from './components/HomePage';

function App() {

  const defaultUserData = {
    username: 'Alex',
    email: 'alex@example.com',
    profileImage: '/path-to-profile-image.jpg', 
    profileViews: '75',
    memberSince: 'June 2009',
    bio: 'This is a short bio...',
    shareProfile: true,
    displayName: 'AlexTheBlogger'
  };

  const handleSaveProfile = (updatedProfile) => {
    console.log('Profile data to save:', updatedProfile);
  };

  return (
    <Router>
      <Routes>
        { <Route path="/login" element={<Login />} /> }
        { <Route path="/signup" element={<Signup />} /> }
        <Route path="/Homepage" element={<HomePage />} />
        <Route path="/editprofile" element={<EditProfile user={defaultUserData} onSave={handleSaveProfile} />} />
        <Route path="/userprofile" element={<UserProfile user={defaultUserData} />} />
       
      </Routes>
    </Router>
  );
}

export default App;
