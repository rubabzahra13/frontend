import React from 'react';
import backgroundImage from './images/bg.jpg';
import profileImage from './images/DP.jpg';

const UserProfile = ({ user }) => {
  const { username, email, profileViews, memberSince, bio } = user;

  const userBlogs = [
    { id: 1, title: 'Blog Post Title 1', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { id: 2, title: 'Blog Post Title 2', content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { id: 3, title: 'Blog Post Title 3', content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.' },
    { id: 4, title: 'Blog Post Title 4', content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse.' },
    { id: 5, title: 'Blog Post Title 5', content: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
  ];

  const styles = {
    container: {
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    profileContainer: {
      display: 'flex',
      flexDirection: 'column',
      maxWidth: '800px',
      width: '100%',
      background: 'rgba(255, 255, 255, 0.8)',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 0 10px rgba(0,0,0,0.1)',
      position: 'relative',
    },
    userImage: {
      width: '100px',
      height: '100px',
      borderRadius: '50%',
      position: 'absolute',
      top: '20px',
      right: '20px',
    },
    editProfileButton: {
      backgroundColor: '#3C4EF1',
      color: '#fff',
      padding: '10px',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
      marginTop: '20px',
    },
    editProfileButtonHover: {
      backgroundColor: '#2a3a9d',
    },
    blogsContainer: {
      background: '#fff',
      padding: '20px',
      borderRadius: '8px',
      marginTop: '20px',
    },
    blogItemStyle: {
      marginBottom: '20px',
    },
    blogTitleStyle: {
      fontSize: '20px',
      color: '#3C4EF1',
      marginBottom: '10px',
    },
    blogContentStyle: {
      fontSize: '14px',
      color: '#757F8E',
    },
  };

  const handleEditProfile = () => {
    // Handle the action when the Edit Profile button is clicked
    console.log('Edit Profile clicked');
  };

  return (
    <div style={styles.container}>
      <div style={styles.profileContainer}>
        <div className="user-profile">
          <div className="user-info">
            <h1>{username}</h1>
          </div>
          <img src={profileImage} alt="User" style={styles.userImage} />
          <div>
            <p>Contact me: <a href={`mailto:${email}`}>{email}</a></p>
            <p>On Blogger since {memberSince}</p>
            <p>Profile views: {profileViews}</p>
            <p>About me: {bio}</p>
            <div>
              <p>Followers: 100</p>
              <p>Following: 50</p>
              <p>Blog Posts: {userBlogs.length}</p>
            </div>
          </div>
          {/* Edit Profile button */}
          <button
            style={styles.editProfileButton}
            onClick={handleEditProfile}
            onMouseEnter={() => styles.editProfileButton.backgroundColor = styles.editProfileButtonHover.backgroundColor}
            onMouseLeave={() => styles.editProfileButton.backgroundColor = '#3C4EF1'}
          >
            Edit Profile
          </button>
        </div>

        {/* Display user blogs in a white box */}
        <div style={styles.blogsContainer}>
          <h2>User Blogs</h2>
          {userBlogs.map((blog) => (
            <div key={blog.id} style={{ ...styles.blogItemStyle }}>
              <h3 style={styles.blogTitleStyle}>{blog.title}</h3>
              <p style={styles.blogContentStyle}>{blog.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
